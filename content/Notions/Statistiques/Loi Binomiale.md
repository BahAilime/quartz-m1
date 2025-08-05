# Conditions pour une Loi Binomiale

1.  [[Épreuve de Bernoulli]]:
    *   Deux issues possibles : Succès ou Échec.

2.  **Binôme (n, p) :**
    *   [[n]] : Nombre de [[répétitions]] de l'épreuve.
    *   [[p]] : [[Probabilité]] de succès.

# Formule de la Loi Binomiale

$$ P(X=k) = {n \choose k}P^k(1-p)^{n-k} $$

*   **Décomposition :**
    *   P(X = k) : Probabilité d'obtenir k succès.
    *   ${n \choose k}$ : [[Coefficient Binomial]] ("k parmi n").
    *   ${P^k}$ : Probabilité de succès élevé à la puissance du nombre de succès.
    *   ${(1 - P)^{n - k}}$ : Probabilité d'échec élevé à la puissance du nombre d'échecs.

# Calcul de ${n \choose k}$ ([[Coefficient Binomial]])

$$ {n \choose k} = \frac{n!}{k!(n-k)!} $$

*   ${n!}$ : n factorial ${(n * (n-1) * (n-2) * ... * 1)}$
*   ${k!}$ : k factorial ${(k * (k-1) * (k-2) * ... * 1)}$
*   ${(n - k)!}$ : (n - k) factorial

## Exemple de calcul ${10 \choose 8}$:

$$ {10 \choose 8} = \frac{10!}{8!(10-8)!} = \frac{10!}{8!2!} $$
$$ = \frac{10 \times 9 \times 8 \times ... \times 1}{8 \times 7 \times ... \times 1 \times 2 \times 1} $$
$$ = \frac{10 \times 9}{2 \times 1} = 45 $$

# Comment repérer une loi binomiale dans un énoncé ?

1.  Nombre de répétitions : Un nombre précis d'essais.
2.  Probabilité : Une probabilité de succès donnée.
3.  Deux issues : Soit un succès, soit un échec. Ex : Lot conforme / Non conforme.

# Conseils pour la pratique

*   Maîtriser le calcul des factoriels "de tête" pour gagner du temps.
*   S'exercer avec des exemples variés.
