
import React from "react";
import {connect, useDispatch} from "react-redux";
import Card from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions/actions";
import styles from './Favorites.module.css';

function Favorites ({myFavorites}){

    const dispatch = useDispatch();

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value));
    }

    const handleFilter = (event) => {
        dispatch(filterCards(event.target.value));
    }

    return(
        <div style={{
            backgroundImage: 'url(https://wallpaperaccess.com/full/637645.jpg)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            height: '1200px',
            backgroundAttachment: 'fixed'}}>
            <div>
                <div>
                    <select className={styles.GeneralButton} name="order" onChange={handleOrder}>
                        <option value={'--'}>--</option>
                        <option value={'R'}>Reset</option>
                        <option value={'A'}>Ascendent</option>
                        <option value={'D'}>Descendent</option>
                    </select>
                    <select className={styles.GeneralButton} onChange={handleFilter}>
                        <option value={'--'}>--</option>
                        <option value={'R'}>Reset</option>
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