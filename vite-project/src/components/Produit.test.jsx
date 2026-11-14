import { describe, it, expect } from 'vitest';
import reducer, { addProduit, deleteProduit, updateProduit } from '../features/SliceProduit';

describe('SliceProduit - reducers', () => {
    const initialState = {
        produits: [
            { id: 1, nom: 'PC Portable', prix: 8000 }
        ]
    };

    it('devrait gérer l\'ajout d\'un produit', () => {
        const nouveauProduit = { id: 2, nom: 'Smartphone', prix: 4000 };
        const nextState = reducer(initialState, addProduit(nouveauProduit));
        
        expect(nextState.produits.length).toBe(2);
        expect(nextState.produits[1].nom).toBe('Smartphone');
    });

    it('devrait gérer la suppression d\'un produit', () => {
        const nextState = reducer(initialState, deleteProduit(1));
        
        expect(nextState.produits.length).toBe(0);
    });

    it('devrait gérer la modification d\'un produit', () => {
        const produitModifie = { id: 1, nom: 'PC Gamer', prix: 12000 };
        const nextState = reducer(initialState, updateProduit(produitModifie));
        
        expect(nextState.produits[0].nom).toBe('PC Gamer');
        expect(nextState.produits[0].prix).toBe(12000);
    });
});