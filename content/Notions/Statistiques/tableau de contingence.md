Un **tableau de contingence** (ou tableau de croisement) est un outil statistique utilisé pour analyser la relation entre **deux [[variable catégorielle|variables catégorielles]]**.

Il permet de regrouper les données selon les catégories de chaque variable, afin d'observer les fréquences d'occurrence des combinaisons possibles.

> 💡 Exemple :  
> On veut étudier si le genre d’un étudiant influence son choix de filière (sciences ou lettres).

# Structure d’un tableau de contingence

Un tableau de contingence est une matrice à deux dimensions :

| Variable A (ligne) | Variable B (colonne) | Fréquence |
|-------------------|----------------------|----------|
| Catégorie A1      | Catégorie B1         | f₁₁      |
| Catégorie A1      | Catégorie B2         | f₁₂      |
| Catégorie A2      | Catégorie B1         | f₂₁      |
| Catégorie A2      | Catégorie B2         | f₂₂      |

## Explication :
- **Lignes** : catégories de la première variable (ex : genre : homme / femme)
- **Colonnes** : catégories de la deuxième variable (ex : filière : sciences / lettres)
- **Cases** : fréquences (nombre d’individus) dans chaque combinaison

# Exemple concret

On a étudié 100 étudiants :

| Genre \ Filière | Sciences | Lettres | Total   |
| --------------- | -------- | ------- | ------- |
| Homme           | 30       | 20      | 50      |
| Femme           | 25       | 25      | 50      |
| **Total**       | **55**   | **45**  | **100** |

> ✅ Ce tableau permet de répondre à des questions comme :
> - Quel est le taux d’hommes dans les sciences ?
> - Y a-t-il une différence entre les genres en termes de choix de filière ?

# Objectifs d’un tableau de contingence

1. **Analyser la relation entre deux variables catégorielles**
2. **Identifier les associations ou corrélations**
3. **Calculer des mesures statistiques** (fréquences, pourcentages, coefficients de corrélation)

# Calculs utiles

### 1. Fréquences absolues
- Nombre d’individus dans chaque case.

### 2. Fréquences relatives
- Pourcentage d’individus dans chaque case par rapport au total.

> Exemple :  
> Fréquence relative de "Homme + Sciences" = 30 / 100 = 30%

### 3. Fréquences marginales
- Somme des lignes ou colonnes.

> Exemple :  
> Total des hommes = 50  
> Total des sciences = 55

## ⚠️ Limites des tableaux de contingence

- Ne fonctionnent **que pour des variables catégorielles**
- Ne permettent **pas de prédire** des valeurs continues
- Peuvent être **sensibles aux effectifs** (problème avec petits effectifs)
- Ne montrent **pas la causalité** (corrélation ≠ causalité)

> ❌ On ne peut pas dire que "les hommes aiment les sciences" simplement parce que les données montrent une corrélation.

# En résumé

| Point clé                                  | Description                                                                                       |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| ✅ Qu’est-ce qu’un tableau de contingence ? | Matrice croisant deux [[variable catégorielle\|variables catégorielles]]                          |
| ✅ Quels calculs utiliser ?                 | Fréquences, pourcentages, [[test du chi-deux\|χ²]]                                                |
| ✅ Quel test faire ?                        | Test du [[test du chi-deux\|χ²]] pour vérifier l’indépendance                                     |
| ❌ Quelles limites ?                        | Ne montre pas la causalité, ne fonctionne pas avec des [[variable continue\|variables continues]] |

