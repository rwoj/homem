import React from "react"
import PropTypes from 'prop-types'
import OgrzewanieForm from './OgrzewanieForm'

const OgrzewaniePietro = ({currentTemp, zapisz})=>{
    
    const currentTempList=currentTemp.map(x=>
            <OgrzewanieForm key={x.id} lokal={x} zapisz={zapisz} />
        )

    return (
        <div>
            <h4>ogrzewanie pietro</h4>
            <div className='ogrzewanieNaglowek'>
                <div className='nazwa'>Nazwa</div>
                <div className='grzanie'>0/1</div>
                <div className='temperatura'>Temp</div>
                <div className='temperatura-init-nastawa'>Nastawa</div>
                <div className='buttony-nastawy'>Zmień</div>
            </div>
            {currentTempList}
        </div>
    )
}

OgrzewaniePietro.propTypes={
    currentTemp: PropTypes.arrayOf(PropTypes.shape({})).isRequired, 
    zapisz: PropTypes.func.isRequired,
}

export default OgrzewaniePietro