
Le théorème central limite ou TCL est l'un des résultats fondamentaux en probabilités et en statistiques. Il permet de comprendre le comportement asymptotique de la somme de variables aléatoires indépendantes et identiquement distribuées.

Ce théorème affirme que, sous certaines conditions, la distribution de la somme de ces variables tend vers une loi normale, quelle que soit la distribution initiale des variables, à condition que le nombre de termes soit suffisamment grand.

# Énoncé du théorème

Soit $X_1, X_2, \dots, X_n$ une suite de variables aléatoires indépendantes et identiquement distribuées, avec une moyenne $\mu$ et une variance $\sigma^2$ finies.

On définit la somme partielle :

$$
S_n = X_1 + X_2 + \dots + X_n
$$

On considère alors la variable aléatoire standardisée :

$$
Z_n = \frac{S_n - n\mu}{\sqrt{n}\sigma}
$$

Alors, lorsque $n \to \infty$, la variable $Z_n$ converge en loi vers une [[loi normale]] [[variable centrée et réduite#Qu'est-ce qu'une variable centrée ?|centrée]] [[variable centrée et réduite#Qu'est-ce qu'une variable réduite ?|réduite]] :

$$
Z_n \xrightarrow{d} N(0,1)
$$

# Interprétation

Ce résultat signifie que, quelle que soit la distribution initiale des $X_i$, à partir d'un certain nombre de termes, la somme des variables devient approximativement normale.

Cela implique que :

- La moyenne de $S_n$ est $n\mu$
- La variance de $S_n$ est $n\sigma^2$
- L'écart type de $S_n$ est $\sqrt{n}\sigma$

La convergence est donc vers une loi normale de moyenne 0 et d'écart type 1.

## Conditions d'application

Le théorème central limite suppose :

1. Indépendance des variables $X_i$
2. Identique distribution
3. [[variance]] finie $\sigma^2 < \infty$

Il est souvent suffisant que les variables soient indépendantes et que leur variance soit finie. La condition de distribution identique peut être affaiblie dans certains cas, mais le résultat reste robuste.

## Exemple concret

Considérons un lancé de dé équilibré. Chaque face a une probabilité $\frac{1}{6}$.

La moyenne d'un lancer est :

$$
\mu = \frac{1+2+3+4+5+6}{6} = 3.5
$$

La [[variance]] est :

$$
\sigma^2 = \frac{(1-3.5)^2 + (2-3.5)^2 + \dots + (6-3. 5)^2}{6} = \frac{35}{12}
$$

Si on répète $n = 100$ lancers, la somme des résultats suit une distribution approximativement normale avec :

- Moyenne : $100 \times 3.5 = 350$
- [[écart type]] : $\sqrt{100} \times \sqrt{35/12} \approx 10 \times 1.71 \approx 17.1$

Ainsi, la somme des 100 lancers est approximativement normale de paramètres $350$ et $17.1^2$.

## Applications

Le théorème central limite est utilisé dans de nombreux domaines :

- Estimation de moyennes
- Construction de intervalles de confiance
- Tests statistiques
- Modélisation de phénomènes complexes

Il permet de remplacer des distributions complexes par une loi normale, ce qui simplifie les calculs.

## Limites et remarques

- Le théorème ne garantit pas une convergence rapide : le nombre de termes nécessaires dépend de la distribution initiale.
- Pour des distributions très lourdes (comme la loi de Cauchy), la variance n'existe pas, et le théorème ne s'applique pas.
- La convergence est en loi, pas presque sûrement, donc elle ne garantit pas une approximation précise pour des valeurs finies de $n$.

## Conclusion

Le théorème central limite est un pilier de la statistique inférentielle. Il justifie l'utilisation de la [[loi normale]] dans de nombreux contextes, même lorsque les données initiales ne suivent pas une distribution normale.

Il montre que la somme de variables aléatoires indépendantes tend vers une distribution normale, indépendamment de leur distribution initiale, à condition que le nombre de termes soit suffisamment grand.

Ce résultat est fondamental pour comprendre la stabilité des estimateurs, la convergence des méthodes statistiques, et la modélisation de phénomènes réels.
