En statistique, on utilise souvent des **variables centrées** et **réduites** pour simplifier les analyses, notamment lors de la comparaison entre variables ou dans les modèles de régression.

> ⚠️ **Attention** : Ces transformations ne modifient pas les données, mais elles changent leur échelle et leur position sur l'axe.

 Pourquoi ne pas utiliser les variables telles qu'elles sont ?

> Parce que des variables avec des échelles différentes peuvent "dominer" les analyses. La standardisation équilibre leur influence.

# Qu'est-ce qu'une variable centrée ?

Une **variable centrée** est une variable obtenue en **soustrayant la moyenne** de chaque valeur d'une variable initiale.

## Formule

$X_{\text{centrée}} = X - \bar{X}$

> Où :
> - $X$ est la valeur initiale
> - $\bar{X}$est la moyenne de la variable $X$

## Exemple
Soit la variable $X = [2, 4, 6, 8, 10]$

- Moyenne $\bar{X} = \frac{2+4+6+8+10}{5} = 6$
- Variable centrée :  
  $[2-6, 4-6, 6-6, 8-6, 10-6] = [-4, -2, 0, 2, 4]$

> ✅ Propriété : La moyenne de la variable centrée est **0**.

# Qu'est-ce qu'une variable réduite ?

Une **variable réduite** est une [[#📌 Qu'est-ce qu'une variable centrée ?|variable centrée]] **divisée par l'[[écart type]]**.

## Formule

$X_{\text{réduite}} = \frac{X - \bar{X}}{\sigma}$

> Où :
> - $\sigma$ est l'écart-type de la variable $X$

## Exemple

Revenons à $X = [2, 4, 6, 8, 10]$

- [[écart type]] $\sigma \approx 2.83$ 
- Variable réduite :  
	 $[\frac{-4}{2.83}, \frac{-2}{2.83}, \frac{0}{2.83}, \frac{2}{2.83}, \frac{4}{2.83}] \approx [-1.41, -0.71, 0, 0.71, 1.41]$

> ✅ Propriété : La moyenne est **0**, et l'écart-type est **1**.

> 💡 Ces variables sont appelées **variables standardisées** ou **variables Z**.

# Résumé : Centrée vs Réduite

| Propriété  | Variable Centrée   | Variable Réduite                    |
| ---------- | ------------------ | ----------------------------------- |
| Formule    | $X - \bar{X}$      | $\frac{X - \bar{X}}{\sigma}$        |
|            | $X - moyX$         | Variable centrée sur [[écart type]] |
| Moyenne    | 0                  | 0                                   |
| Écart-type | $\sigma$           | 1                                   |
| Unité      | Même unité que $X$ | Sans unité ("dimensionless")        |

> 📝 **Astuce** : On peut dire que la variable réduite est une **variable centrée normalisée**.


# Exemple concret : Comparaison de deux variables

Supposons que nous voulons comparer :
- La taille (en cm) : moyenne = 170, écart-type = 10
- Le salaire (en €) : moyenne = 3000, écart-type = 1000

On peut standardiser les deux variables pour les comparer.

> Exemple :  
> - Taille réduite de 175 cm :  $\frac{175 - 170}{10} = 0.5$  
> - Salarie réduit de 4000 € : $\frac{4000 - 3000}{1000} = 1.0$

> ✅ On voit que le salaire est "plus éloigné" de la moyenne que la taille.

## 📝 Astuces pratiques

- Utilisez **Python** ou **R** pour automatiser le calcul :
  ```python
  import numpy as np
  X = np.array([2, 4, 6, 8, 10])
  X_centre = X - np.mean(X)
  X_reduite = X_centre / np.std(X)
  ```
