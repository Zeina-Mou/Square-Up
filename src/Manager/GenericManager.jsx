import { useState, useEffect } from 'react';
import { crudEngine } from '../utils/crudEngine';
import './GenericManager.css'

/**
 * GenericManager Component
 * Handles CRUD operations for different data sections using a centralized JSON Server.
 */
const GenericManager = ({ sectionConfig }) => {
    const [data, setData] = useState([]);
    const { keys, resource, title } = sectionConfig;
    
    // The endpoint URL dynamically points to the specific resource in db.json
    const API_URL = `http://localhost:5000/${resource}`;

    /**
     * Fetch Data from Server
     * Triggered whenever the API_URL changes (e.g., switching between dashboard sections).
     */
    useEffect(() => {
        fetch(API_URL)
            .then(res => {
                if (!res.ok) throw new Error("Failed to fetch data");
                return res.json();
            })
            .then(json => setData(json))
            .catch(err => {
                console.error("Server Connection Error: Please ensure 'npm run server' is active.", err);
            });
    }, [API_URL]);

    /**
     * Synchronize State with local JSON file
     * Sends the current state to the JSON server to overwrite the specific resource.
     */
    const syncDatabase = async (updatedData) => {
    try {
        // 1. Fetch current data from server for comparison
        const response = await fetch(API_URL);
        const serverData = await response.json();
        
        // Get list of IDs currently existing on the server
        const serverIds = serverData.map(item => item.id.toString());

        const updatePromises = updatedData.map(item => {
            // 2. Check: Does this ID exist on the server?
            const existsOnServer = item.id && serverIds.includes(item.id.toString());

            if (existsOnServer) {
                // Update existing item (PUT)
                return fetch(`${API_URL}/${item.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(item)
                });
            } else {
                // Add brand new item (POST)
                // Remove temporary ID and let the server generate an official ID
                const { id: _, ...newItem } = item; 
                return fetch(API_URL, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(newItem)
                });
            }
        });

        await Promise.all(updatePromises);
        
        // 3. Update the UI with final data
        const refreshResponse = await fetch(API_URL);
        const freshData = await refreshResponse.json();
        setData(freshData);

        alert("Saved successfully without duplicates!");
    } catch (error) {
        console.error("Sync Error:", error);
        alert("An error occurred during synchronization.");
    }
};
    /**
     * Update an individual cell in the table
     * Updates local state immediately; requires manual save to persist to file.
     */
    const handleUpdate = (rowIndex, keyIndex, newValue) => {
        const valuesArray = keys.map((k, i) => 
            i === keyIndex ? newValue : data[rowIndex][k]
        );
        const updated = crudEngine.update(data, keys, valuesArray, rowIndex);
        setData(updated);
    };

    /**
     * Add a new row to the data
     */
    const handleAdd = () => {
        const defaultValues = keys.map(() => "New Entry");
        const updated = crudEngine.create(data, keys, defaultValues);
        setData(updated);
    };

    /*Delete a row from the data and the server*/
const handleDelete = async (index) => {
    const itemToDelete = data[index];

    if (window.confirm(`Are you sure you want to delete "${itemToDelete.name || itemToDelete.titel || 'this item'}"?`)) {
        try {
            // 1. Send delete request to server using the ID
            const response = await fetch(`${API_URL}/${itemToDelete.id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                // 2. If server deletion succeeds, remove from UI state
                const updated = crudEngine.delete(data, index);
                setData(updated);
            } else {
                throw new Error("Failed to delete from server.");
            }
        } catch (error) {
            console.error("Delete Error:", error);
            alert("Could not delete the item. Make sure the server is running.");
        }
    }
};

    return (
        <div className="manager-container">
            {/* Header Section */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <h3 style={{ margin: 0 }}>Editing: {title}</h3>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <button 
                        className="btn-add" 
                        onClick={handleAdd}
                        style={{ padding: '10px 15px', cursor: 'pointer' }}
                    >
                        + Add Row
                    </button>
                    <button 
                        className="btn-save" 
                        onClick={() => syncDatabase(data)} 
                        style={{ 
                            backgroundColor: '#4CAF50', 
                            color: 'white', 
                            padding: '10px 20px', 
                            border: 'none', 
                            borderRadius: '5px', 
                            cursor: 'pointer',
                            fontWeight: 'bold'
                        }}
                    >
                        💾 Save All Changes
                    </button>
                </div>
            </div>

            {/* Data Table */}
            <table className="data-table" style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ backgroundColor: '#f4f4f4', textAlign: 'left' }}>
                        {keys.map(key => (
                            <th key={key} style={{ padding: '12px', border: '1px solid #ddd' }}>
                                {key.toUpperCase()}
                            </th>
                        ))}
                        <th style={{ padding: '12px', border: '1px solid #ddd' }}>ACTIONS</th>
                    </tr>
                </thead>
                <tbody>
    {data.length > 0 ? (
        data.map((item, rowIndex) => (
    <tr key={rowIndex}>
        {keys.map((key, keyIndex) => (
            <td key={keyIndex} style={{ padding: '8px', border: '1px solid #ddd' }}>
                {/* If key is 'number', calculate automatically based on rowIndex */}
                {key === 'number' ? (
                    <div style={{ padding: '5px', fontWeight: 'bold', textAlign: 'center', color: '#555' }}>
                        {(rowIndex + 1).toString().padStart(2, '0')}
                    </div>
                ) : (
                    <input 
                        type="text" 
                        style={{ width: '95%', padding: '5px' }}
                        value={Array.isArray(item[key]) ? item[key].join(', ') : (item[key] || "")} 
                        onChange={(e) => handleUpdate(rowIndex, keyIndex, e.target.value)} 
                    />
                )}
            </td>
        ))}
        
        {/* Delete Button */}
        <td style={{ padding: '8px', border: '1px solid #ddd', textAlign: 'center' }}>
            <button 
                onClick={() => handleDelete(rowIndex)}
                style={{ color: 'red', cursor: 'pointer', border: 'none', background: 'none' }}
            >
                Delete
            </button>
        </td>
    </tr>
))
    ) : (
        <tr>
            <td colSpan={keys.length + 1} style={{ textAlign: 'center', padding: '20px' }}>
                No data found. Please ensure the server is running.
            </td>
        </tr>
    )}
</tbody>
            </table>
        </div>
    );
};

export default GenericManager;