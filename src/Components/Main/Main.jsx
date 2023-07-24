import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setUser, clearList, setAllUser } from '../../store/reducers/userSlice';
import '../style.css'

const Main = () => {
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.user)
    console.log(user);
    const handleAddItem = () => {
        if (inputValue1.trim() !== '') {
            dispatch(setUser({ input1: inputValue1, input2: inputValue2 }));
            setInputValue1('');
            setInputValue2('');
        }
    }
    const handleClearList = () => {
        dispatch(clearList());
    };
    useEffect(() => {
        dispatch(setAllUser(localStorage.getItem('user') !== null ? JSON.parse(localStorage.getItem('user')) : []))
    }, [])

    return (
        <div className='container'>
            <header>
                <div><a href="#">Home</a></div>
                <div><a href="#">Page</a></div>
            </header>
            <form>
                <div>
                    <input type="text" value={inputValue1} onChange={(e) => setInputValue1(e.target.value)} />
                    <input type="text" value={inputValue2} onChange={(e) => setInputValue2(e.target.value)} />
                </div>
                <button onClick={handleAddItem} type="button" className="add-button">Add List</button>
                <button onClick={handleClearList} className="clear-button">Clear List</button>
            </form>

            <div>
                {user.length ? user.map((item, index) => (
                    <li key={index}>
                        {item.input1} {item.input2}
                    </li>
                )) : 'пусто'}
            </div>

        </div>

    )
}

export default Main