import React from 'react';
import './Sort .scss';
const Sort = () => {
    // --sorting function
    const sorting = () => {

    }
    return (
        <>
            <section id="sort">
                <div className="sort-selection">
                    <form action="#" className=' w-50 mt-5 text-center'>
                        <label htmlFor="sort" className=' fs-3 fw-bold '>Sort</label>
                        <select name="sort" id="sort" className='w-25 text-center mr-3 selection' onClick={sorting} value='sort by'>
                            <option value="lowest">price(Highest)</option>
                            <option value="#" disabled></option>
                            <option value="lowest">price(Lowest)</option>
                            <option value="#" disabled></option>
                            <option value="lowest">price(a-z)</option>
                            <option value="#" disabled></option>
                            <option value="lowest">price(z-a)</option>
                        </select> 
                        <label htmlFor="sort" className=' fs-3 fw-bold  ml-3'>Filter</label>
                        <input type="text" placeholder='filter by' className=' filterInput' />
                    </form>
                </div>
            </section>
        </>
    )
}

export default Sort;