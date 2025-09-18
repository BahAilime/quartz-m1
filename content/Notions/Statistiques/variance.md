La variance est une mesure de dispersion d'un ensemble de données. Elle permet d'évaluer la manière dont les valeurs d'une variable s'éloignent de la moyenne.

Elle joue un rôle central dans la compréhension de la répartition des données, notamment dans les analyses statistiques, la modélisation probabiliste et l'inférence statistique.

## Définition

La variance d'un ensemble de données est la moyenne des carrés des écarts par rapport à la moyenne.

Soit $X$ une variable aléatoire ou un ensemble de données $x_1, x_2, \dots, x_n$.

La variance est définie par :

$$
\sigma^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2
$$

où $\bar{x}$ est la moyenne des valeurs $x_i$.


## Interprétation

- Une variance élevée indique que les données sont dispersées autour de la moyenne.
- Une variance faible signifie que les données sont proches de la moyenne.
- La variance est toujours positive ou nulle.

## Variance pour une population et une échantillon

Il existe deux formules selon le contexte :

### Variance de la population

$$
\sigma^2 = \frac{1}{n} \sum_{i=1}^n (x_i - \bar{x})^2
$$

### Variance de l'échantillon (estimée)

Pour éviter le [[biais d'estimation]] (voir [[erreur de Bessel]]), la variance de l'échantillon est souvent calculée avec un dénominateur $n-1$ :

$$
s^2 = \frac{1}{n-1} \sum_{i=1}^n (x_i - \bar{x})^2
$$

Cette formule est appelée **[[variance corrigée]]**.

## Propriétés de la variance

1. **Symétrie** : La variance est invariante par translation. Si on ajoute une constante à toutes les valeurs, la variance ne change pas.

   $\text{Var}(X + c) = \text{Var}(X)$

2. **Homogénéité** : Si on multiplie toutes les valeurs par une constante $a$, la variance est multipliée par $a^2$. 

	$\text{Var}(aX) = a^2 \text{Var}(X)$

3. **Variance d'une somme de variables** : Pour deux variables aléatoires $X$ et $Y$, on a :

	$\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y) + 2\text{Cov}(X, Y)$

	Où Cov(X,Y) désigne la [[covariance]] entre les variables aléatoires $X$ et $Y$.

   Si $X$ et $Y$ sont indépendantes, alors $\text{Cov}(X, Y) = 0$, donc :
   $\text{Var}(X + Y) = \text{Var}(X) + \text{Var}(Y)$

## Exemple

Considérons les données suivantes : $2, 4, 6, 8, 10$

1. Calcul de la moyenne :
   $\bar{x} = \frac{2 + 4 + 6 + 8 + 10}{5} = \frac{30}{5} = 6$

2. Calcul des écarts au carré :
   $(2 - 6)^2 = 16$
   $(4 - 6)^2 = 4$
   $(6 - 6)^2 = 0$
   $(8 - 6)^2 = 4$
   $(10 - 6)^2 = 16$

3. Somme des carrés des écarts :
   $16 + 4 + 0 + 4 + 16 = 40$

4. Variance de l'échantillon (avec $n-1$) :
	$\sigma^2 = \frac{40}{5 - 1} = \frac{40}{4} = 10$

## Relation avec l'écart type

L'[[écart type]] est la racine carrée de la variance.

$$
\sigma = \sqrt{\sigma^2}
$$

Il est exprimé dans les mêmes unités que les données, contrairement à la variance.

## Utilité en statistique

- La variance est utilisée dans le calcul de l'erreur standard.
- Elle est fondamentale dans les lois de probabilité (ex. [[loi normale]]).
- Elle intervient dans les tests statistiques (ex. [[test de Student]]).
- Elle permet de comparer la [[dispersion]] entre différentes distributions.

## Conclusion

La variance est une mesure essentielle de dispersion. Elle permet de quantifier la variabilité des données autour de leur moyenne. Comprendre sa définition, ses propriétés et ses applications est crucial pour toute analyse statistique.

> En pratique, la variance est souvent utilisée en conjonction avec d'autres mesures comme la médiane, le quartile ou l'écart type.
