import "./Title.css"

function Title({ title, desc1, desc2 }) {
    return (
        <>
            <div className='sb-title-sec'>
                <h2>{title}</h2>
                {desc1 ? (
                    <p className="sb-desc1-sec">{desc1}</p>
                ) : null}

                {desc2 ? (
                    <div className="sb-desc2-sec">
                        <p>{desc2}</p>
                    </div>
                ) : null}
            </div>
        </>
    )
}

export default Title
