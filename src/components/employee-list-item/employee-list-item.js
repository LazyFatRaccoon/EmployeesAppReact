import './employee-list-item.css';



const EmployeeListItem = (props) => {

    
        const { name, salary, onDelete, onToggleProp,increase,liked } = props;
        
        let classNames = 'list-group-item d-flex justify-content-between';

        if (increase) {
            classNames += ' increase';
        }
        if (liked) {
            classNames += ' like';
        }
   

    return (
        
        <li className={classNames}>
            <span onClick={onToggleProp}
                className='list-group-item-label'
                data-toggle='liked'
                style={{ fontSize: '40px'}}>{name}</span>
            <input type="text" className="list-group-item-input" defaultValue={salary+'$'} />
            <div className="d-flex justify-content-center align-items-center">
                <button type='button'
                    data-toggle = 'increase'
                    onClick ={onToggleProp}
                    className='btn-cookie btn-sm'>
                    <i className="fas fa-cookie"></i>
                </button>
                <button onClick={onDelete} type='button'
                    className='btn-trash btn-sm'>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}



export default EmployeeListItem;