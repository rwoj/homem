import React from 'react'

const SwiatloForm = ({currentSwiatlo}) => {
    const listaSwiatel = currentSwiatlo.map(item=>
    <li key={item.id}>
         {item.nazwaLokalu} ({item.nazwa}
    </li>)
    return (
            <ol>
                {listaSwiatel}
            </ol>
        )  
}
export default SwiatloForm

// <TouchableOpacity  style={styles.itemBox}
//     onPress={()=>zapisz(item.idWySter, item.swiatlo===0?1:0)}>
//     <Icon type='font-awesome' name='lightbulb-o' 
//         size={24} color={item.swiatlo===0?'blue':'yellow'} /> 
//     <Text style={styles.item}>{item.nazwa} </Text>
// </TouchableOpacity>

