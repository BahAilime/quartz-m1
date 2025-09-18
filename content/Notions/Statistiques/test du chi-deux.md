


# Cours : Tests du χ² (Chi-Deux)

## 1. Introduction

Le **test du χ²** (chi-deux) est une méthode statistique utilisée pour tester des hypothèses sur la **distribution d'une [[variable catégorielle]]**. Il permet de comparer les fréquences observées dans un [[échantillon]] à des fréquences attendues selon une [[#Hypothèse nulle (H₀)]].

Ce test est particulièrement utile dans les cas suivants :
- Vérification d'une **distribution uniforme** (ex : les résultats d’un dé sont-ils équitablement répartis ?)
- Test d'**indépendance** entre deux variables catégorielles (ex : est-ce que le sexe influence le choix de sport ?)
- Test d'**homogénéité** (ex : les proportions d’un phénomène sont-elles les mêmes dans différentes populations ?)

## 2. Hypothèses

### Hypothèse nulle (H₀)
- Les données suivent une distribution donnée (ou les variables sont indépendantes / les proportions sont égales dans les groupes).

### Hypothèse alternative (H₁)
- Les données ne suivent pas la distribution donnée (ou les variables sont dépendantes / les proportions sont différentes).

> ⚠️ Le test du χ² est **unilatéral** (il ne teste pas directement une direction, mais la différence de distribution).

---

## 3. Types de tests du χ²

| Type                    | Objectif                                                                               | Exemple                                                                                                          |
| ----------------------- | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Test d'adéquation**   | Vérifier si les données suivent une distribution donnée (ex : [[loi uniforme]])        | Les résultats d’un dé sont-ils équitablement répartis ?                                                          |
| **Test d'indépendance** | Vérifier si deux [[variable catégorielle\|variables catégorielles]] sont indépendantes | Le sexe influence-t-il le choix de sport ? ([[#7. Exemple concret Test d'indépendance\|Voir "Exemple concret"]]) |
| **Test d'homogénéité**  | Vérifier si les proportions d'une variable sont les mêmes dans plusieurs groupes       | Les taux d’absentéisme sont-ils les mêmes dans les écoles publiques et privées ?                                 |

---

## 4. Calcul du χ²

La formule générale est :

$\chi^2 = \sum_{i=1}^{k} \frac{(O_i - E_i)^2}{E_i}$

Où :
- $O_i$ = fréquence observée dans la catégorie $i$
- $E_i$ = fréquence attendue (ou espérance) dans la catégorie $i$
- $k$ = nombre de catégories

> ⚠️ **Condition de validité** :  
> Pour que le test soit valide, il faut que **chaque espérance $E_i \geq 5$**.  
> Si cette condition n’est pas remplie, le test peut être biaisé ou non fiable.

## 5. Distribution du χ²

Le test du χ² repose sur la **loi du χ²** (loi de chi-deux), qui est une distribution de probabilité continue.

- Le degré de liberté ($dl$) dépend du type de test :
  - **Test d'adéquation** : $df = k - 1$ ($k$ = nombre de catégories)
  - **Test d'indépendance** : $df = (r -  1)(c - 1)$  
    ($r$ = nombre de lignes, $c$ = nombre de colonnes dans le tableau)
  - **Test d'homogénéité** : $df = (r - 1)(c - 1)$ (même formule que l’indépendance)

> Le **p-value** est calculé à partir de la distribution χ² avec le degré de liberté approprié.

---

## 6. Interprétation des résultats

| p-value       | Conclusion                                                                 |
| ------------- | -------------------------------------------------------------------------- |
| $p \geq 0.05$ | On ne rejette pas H₀ → les données sont compatibles avec l’hypothèse nulle |
| $p < 0.05$    | On rejette H₀ → il y a une différence significative                        |

> ⚠️ **Attention** :  
> Le test du χ² **ne permet pas de déterminer la nature de la différence** (quelle catégorie est différente ?). Il indique seulement qu’il y a une différence significative.

## 7. Exemple concret : Test d'indépendance

### Énoncé :
On veut savoir si le genre influence le choix de sport (football, tennis, autre).

| Sport     | Homme | Femme | Total |
| --------- | ----- | ----- | ----- |
| Football  | 40    | 20    | 60    |
| Tennis    | 30    | 40    | 70    |
| Autre     | 10    | 30    | 40    |
| **Total** | 80    | 90    | 170   |

### Étape 1 : Calcul des fréquences attendues

Pour chaque cellule :

$E_{ij} = \frac{(\text{total ligne}) \times (\text{total colonne})}{\text{total global}}$

Exemple :  
- Football, Homme
	- $E = \frac{80 \times 60}{170} \approx 28.23$
	- $O = 40$ (voir tableau)

On calcule toutes les espérances...

### Étape 2 : Calcul du χ²

$\chi^2 = \sum \frac{(O - E)^2}{E}$

On somme pour toutes les cellules.

> Résultat : $\chi^2 \approx 17.56$

### Étape 3 : Déterminer le degré de liberté

$df = (3 - 1)(2 - 1) = 2$

### Étape 4 : Comparer avec la table χ²

- Pour $df = 2$,  $\chi^2_{0.05} \approx 5.99$ 
- $10.2 > 5.99$ → $p < 0.05$

### Étape 4 : Comparer avec la table χ²

- Pour $df = 2$, on a $\chi^2_{0.05} \approx 5.99$  
- Comme la valeur observée est $17.56 > 5.99$, on rejette l'hypothèse nulle à un niveau de signification de 5 %.  
- Cela signifie que le résultat est statistiquement significatif, avec $p < 0.05$.

### Conclusion :
On rejette H₀ → le genre et le choix de sport ne sont **pas indépendants**.

## 8. Limites du test du χ²

| Limite                                             | Explication                                           |
| -------------------------------------------------- | ----------------------------------------------------- |
| Ne permet pas de localiser la différence           | Il indique une différence, mais pas où elle se situe  |
| Sensibilité à l’échantillonnage                    | Moins puissant avec de petits échantillons            |
| Ne fonctionne que pour des variables catégorielles | Ne peut pas être utilisé pour des variables continues |
| Sensibilité aux espérances                         | Si $E_i < 5$, le test est peu fiable                  |

> ✅ **Remède** :  
> - Utiliser un [[test de Fisher]] (pour petits échantillons)  
> - Regrouper les catégories si nécessaire  
> - Utiliser des tests non paramétriques (ex : [[test de Mann-Whitney]]) si les données ne sont pas catégorielles

---

## 9. Utilisation en pratique (ex : Python)

```python
import scipy.stats as stats
import numpy as np

# Tableau de contingence
data = np.array([[40, 20],
                 [30, 40],
                 [10, 30]])

# Test d'indépendance
chi2_stat, p_value, dof, expected = stats.chi2_contingency(data)

print(f"Statistique χ² : {chi2_stat}")
print(f"p-value : {p_value}")
print(f"degré de liberté : {dof}")
```

```
Statistique χ² : 17.567791005291006
p-value : 0.0001531802075341218
Degrés de liberté : 2
```

> Résultat :  
> `p-value` < 0.05 → on rejette H₀

---

## 10. Résumé

| Point          | Résumé                                                                                 |
| -------------- | -------------------------------------------------------------------------------------- |
| Objectif       | Tester des hypothèses sur des distributions ou relations entre variables catégorielles |
| Formule        | $\chi^2 = \sum \frac{(O - E)^2}{E}$                                                    |
| Condition      | Toutes les espérances $E_i \geq 5$                                                     |
| Interprétation | $p < 0.05$ → différence significative                                                  |
| Limites        | Ne localise pas la différence, ne fonctionne que pour variables catégorielles          |
