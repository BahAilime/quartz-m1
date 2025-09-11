Le **modèle Entité-Association (EA)** est une méthode de modélisation de données utilisée pour représenter de manière claire et concise la structure d'une base de données. Il décrit les éléments clés d'un système d'information et leurs relations, sans se préoccuper des détails de mise en œuvre technique.

Voici les éléments principaux :

*   **Entités :** Représentent les objets ou concepts du monde réel qui doivent être stockés et gérés dans la base de données. Chaque entité possède des attributs qui décrivent ses caractéristiques (ex: un étudiant, une commande, un produit).

*   **Attributs :** Ce sont les propriétés ou caractéristiques spécifiques des entités. Ils décrivent les informations que l'on veut stocker (ex: nom, prénom, date de naissance pour l’entité Étudiant ; prix, description pour l’entité Produit).

*   **Associations (Relations) :** Décrivent les liens entre les entités. Elles montrent comment les entités sont connectées les unes aux autres. Elles peuvent représenter des opérations comme : "un étudiant suit un cours" ou "une commande contient des produits." Elles sont souvent exprimées avec des cardinalités pour préciser la nature de la relation (un-à-un, un-à-plusieurs, plusieurs-à-plusieurs).

*   **Cardinalités :** Elles spécifient le nombre d'instances d'une entité qui peuvent être associées à une instance d'une autre entité. Elles permettent de définir la nature des relations (par exemple, un client peut avoir plusieurs commandes, une commande est associée à un seul client, etc.).

Le modèle EA  est donc utilisé pour :

*   **Clarifier les exigences de la base de données.**
*   **Concevoir la structure de la base de données de manière logique.**
*   **Communiquer la structure de la base de données aux personnes impliquées.**