import React, { useState } from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import styles from './Favorites.module.css';

function Favorites ({myFavorites}){

    const gender = useSelector((state) => state.gender);
    const orden = useSelector((state) => state.orden);

    const dispatch = useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return(
        <div style={{
            backgroundImage: 'url(/imgs/fondo-favorites.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '1200px',
            backgroundAttachment: 'fixed'}}>
            <div>
                <div>
                    <select className={styles.GeneralButton} name="order" onChange={handleOrder}>
                        <option value={'--'}>--</option>
                        <option value={'A'}>Ascendente</option>
                        <option value={'D'}>Descendente</option>
                    </select>
                    <select className={styles.GeneralButton} onChange={handleFilter}>
                        <option value={'--'}>--</option>
                        <option value={'Male'}>Male</option>
                        <option value={'Female'}>Female</option>
                        <option value={'Genderless'}>Genderless</option>
                        <option value={'unknown'}>unknown</option>
                    </select>
                </div>
                <div className={styles.Tarjetas}>
                    {myFavorites?.map(({id, name, status, species, gender, image})=>(
                            <Card 
                                key = {id}
                                id = {id}
                                name = {name}
                                status = {status}
                                species = {species}
                                gender = {gender}
                                origin = {true}
                                image = {image}>
                            </Card>
                        ))
                    }
                </div>
               
            </div>
        </div>
    )
}

function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps)(Favorites)