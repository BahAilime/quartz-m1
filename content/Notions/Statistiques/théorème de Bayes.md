Le théorème de Bayes est un outil fondamental en probabilités et en statistiques. Il permet de mettre à jour la probabilité d'un événement en fonction de nouvelles informations.

Ce théorème est particulièrement utile dans des situations où on cherche à évaluer la probabilité d'une hypothèse à partir d'observations.

# Énoncé du théorème

Soit un [[événement]] $A$, dont on cherche à déterminer la probabilité sachant qu'un autre événement $B$ s'est produit. P(A|B) peut se prononcer "Probabilité de $A$ sachant $B$"

Le théorème de Bayes exprime cette probabilité comme suit :

$$
P(A|B) = \frac{P(B|A) \times P(A)}{P(B)}
$$

Où :

- $P(A|B)$ est la probabilité de l'événement $A$ sachant que $B$ s'est produit (probabilité conditionnelle),
- $P(B|A)$ est la probabilité de l'événement et $B$ sachant que $A$ s'est produit,
- $P(A)$ est la probabilité a priori de l'événement $A$,
- $P(B)$ est la probabilité de l'événement $B$.

# Interprétation

Le théorème de Bayes permet de passer d'une probabilité a priori à une probabilité a posteriori.

- La probabilité a priori $P(A)$ est une estimation initiale de la probabilité d'un événement avant qu'on n'ait observé des données.
- L'observation de l'événement $B$ permet de réviser cette estimation, ce qui donne la probabilité a posteriori $P(A|B)$.

## Exemple concret

Imaginons qu'on ait un test médical pour détecter une maladie.

- La maladie est présente dans 1% des cas : $P(M) = 0.01$
- Le test est positif quand la maladie est présente : $P(T|M) = 0.95$
- Le test peut donner un faux positif : $P(T|\bar M) = 0.05$

On veut connaître la probabilité que la personne ait la maladie sachant que le test est positif : $P(M|T)$

On applique le théorème de Bayes :

$$
P(M|T) = \frac{P(T|M) \times P(M)}{P(T)}
$$

On calcule $P(T)$ en utilisant la [[formule de la probabilité totale]] :

$P(T) = P(T|M) \times P(M) + P(T|\bar M) \times P(\bar M)$

$P(T) = 0.95 \times 0.01 + 0.05 \times 0.99 = 0.0095 + 0.0495 = 0.059$

Donc :

$P(M|T) = \frac{0.95 \times 0.01}{0.059} = \frac{0.0095}{0.059} \approx 0.161$

Cela signifie que, même avec un test positif, la probabilité que la personne ait vraiment la maladie est seulement d'environ 16,1 %.

## Limites

- Le théorème de Bayes repose sur des hypothèses sur les probabilités initiales.
- Il nécessite des données précises sur les probabilités conditionnelles.
- Il peut être difficile d'interpréter les résultats sans contexte.
