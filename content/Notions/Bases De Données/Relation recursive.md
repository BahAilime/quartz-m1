Une **relation récursive** est un type de relation, ou association, dans une base de données où une [[entité]] est liée à elle-même. En d'autres termes, une [[Instance d'entité|instance]] d'une entité peut être liée à une autre instance de la même entité. Cela est commun dans le contexte d'arborescence ou de hiérarchies.

Voici quelques points clés :

- **Une entité s'associe à elle-même :** L'entité est à la fois source et cible de la relation.
- **Motif typique :** Souvent utilisée pour modéliser des relations « est-un », « est composé de », ou « contient ».
- **Exemples :**
    - **Employés et managers :** Un employé est managé par un autre employé (qui est son manager).
    - **Produits et composants :** Un produit peut être composé de plusieurs autres produits (composants).
    - **Articles de blog et réponses :** Un article de blog peut avoir des réponses, elles même des articles.
- **Implémentation :** Pour représenter cela dans une base de données relationnelle, on utilise généralement une [[clé étrangère]] qui fait référence à la [[clé primaire]] de la même [[table]]. La clé étrangère permet de lier une ligne à une autre ligne de la même table, établissant ainsi la relation récursive.

En résumé, une relation récursive permet de modéliser des relations internes à une même entité, souvent pour représenter des hiérarchies ou des structures arborescentes.