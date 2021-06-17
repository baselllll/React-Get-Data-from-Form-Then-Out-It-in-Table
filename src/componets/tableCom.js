const tableCom = (props) => {
    var i=1;
    let record = props.items.map((item)=>{
        return <tr key={i}>
            <td>{i++}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
        </tr>
    })
    return (
        <div className="container">
            <h2 className='text-center'>Table of Students</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {record}
                </tbody>
            </table>
        </div>
        )
}

export default tableCom