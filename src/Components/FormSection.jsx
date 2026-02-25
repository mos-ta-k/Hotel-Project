import React from 'react'
import '../styles/form.min.css'

const FormSection = () => {
  return (
    <div>
        <form action="">
            <div>
                <h5>Check IN</h5>
                <input type="date" />
            </div>
            <div>
                <h5>Check OUT</h5>
                <input type="date" />
            </div>
            <div>
                <h5>Adult</h5>
                <select class="num-dropdown">
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4 person</option>
                <option value="5">5 person</option>
                </select>
            </div>
            <div>
                <h5>Children</h5>
                <div>
                <select class="num-dropdown">
                <option value="1">1 person</option>
                <option value="2">2 person</option>
                <option value="3">3 person</option>
                <option value="4">4 person</option>
                <option value="5">5 person</option>
                </select>
            </div>
            </div>
            <button type="submit">Check Now</button>
        </form>
    </div>
  )
}

export default FormSection