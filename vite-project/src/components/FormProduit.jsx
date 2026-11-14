import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import { addProduit,updateProduit } from "../features/SliceProduit";
export const FormProduit=()=>{
    const produits=useSelector(s=>s.produits.produits);
    const dispatch=useDispatch();
    const {id}=useParams();
    const [formData,setFormData]=useState({nom:"",prix:""});
    const prod=produits.find(p=>p.id===Number(id));
    useEffect(()=>{
        if(id && prod){
           
                setFormData({...formData,id:Number(id)});
            
        }
    },[prod,id])
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(id){
            dispatch(updateProduit(formData));
        }else{
            dispatch(addProduit({...formData,id:Date.now()}));
        }
        setFormData({nom:"",prix:""});
    }
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
                <h4>{id?"Modifier le produit ":"Ajouter un produit "}</h4>
                <div className="mt-3">
                    <label htmlFor="nom">Nom</label>
                    <input type="text" value={formData.nom} onChange={(e)=>handleChange(e)} name="nom" id="nom"/>
                </div>
                <div className="mt-3">
                    <label htmlFor="prix">Prix</label>
                    <input type="number" value={formData.prix} onChange={(e)=>handleChange(e)} name="prix" id="prix" />
                </div>
                <div className="mt-3">
                    <button className={id?"btn btn-warning":"btn btn-info"} type="submit">{id?"Modifier":"Ajouter"}</button>
                </div>
            </form>
        </div>
    )
}