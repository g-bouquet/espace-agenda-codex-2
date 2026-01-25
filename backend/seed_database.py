"""
Script pour peupler la base de données avec les articles de blog initiaux
"""
import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Articles de blog initiaux (from mock.js)
initial_blog_posts = [
    {
        'id': '1',
        'title': 'Comment choisir une solution de prise de rendez-vous adaptée à votre pratique',
        'slug': 'comment-choisir-une-solution-de-prise-de-rendez-vous-adaptee-a-votre-pratique',
        'excerpt': 'Découvrez les critères essentiels pour sélectionner un système de réservation en ligne qui correspond réellement à vos besoins professionnels.',
        'content': '''# Introduction

La gestion des rendez-vous est un défi quotidien pour de nombreux professionnels de l'accompagnement. Entre les appels téléphoniques incessants, les annulations de dernière minute et la coordination des emplois du temps, il est facile de perdre un temps précieux qui pourrait être consacré à votre activité principale.

## Les enjeux d'une bonne gestion

Une solution de prise de rendez-vous efficace doit répondre à plusieurs critères essentiels : simplicité d'utilisation, fiabilité, personnalisation et respect de la confidentialité. C'est pourquoi il est crucial de bien choisir l'outil qui vous accompagnera au quotidien.

## Les critères de sélection

Lors du choix d'une plateforme de réservation, plusieurs éléments doivent être pris en compte : la facilité de prise en main, les fonctionnalités proposées, la qualité du support client, et bien sûr, la possibilité de personnaliser l'outil à votre image professionnelle.

## Conclusion

Investir dans une solution de prise de rendez-vous adaptée, c'est investir dans votre sérénité et celle de vos clients. Une plateforme bien choisie vous permettra de gagner du temps, de réduire les absences et d'offrir une expérience moderne et professionnelle.''',
        'author': 'Équipe Espace Agenda',
        'date': '2025-01-15T00:00:00Z',
        'category': 'Conseils',
        'image': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=400&fit=crop',
        'published': True
    },
    {
        'id': '2',
        'title': 'Les avantages de la prise de rendez-vous en ligne pour les praticiens',
        'slug': 'les-avantages-de-la-prise-de-rendez-vous-en-ligne-pour-les-praticiens',
        'excerpt': 'Gain de temps, réduction des absences, automatisation : découvrez comment la réservation en ligne transforme votre quotidien professionnel.',
        'content': '''# Introduction

La digitalisation des pratiques professionnelles n'est plus une option mais une nécessité. Pour les praticiens et professionnels de l'accompagnement, la prise de rendez-vous en ligne représente un tournant majeur dans l'organisation quotidienne.

## Un gain de temps considérable

Fini les allers-retours téléphoniques pour trouver un créneau disponible. Vos clients réservent en quelques clics, 24h/24, même en dehors de vos horaires d'ouverture. Vous gagnez ainsi plusieurs heures par semaine que vous pouvez consacrer à votre cœur de métier.

## Réduction significative des absences

Les rappels automatiques par email et SMS réduisent considérablement les oublis et les absences. Vos clients sont notifiés avant chaque rendez-vous, ce qui améliore votre taux de présence et optimise votre planning.

## Professionnalisme et modernité

Offrir une réservation en ligne, c'est montrer votre engagement dans une pratique moderne et centrée sur le client. C'est aussi valoriser votre image professionnelle et faciliter l'accès à vos services.

## Conclusion

La prise de rendez-vous en ligne n'est pas qu'un outil pratique : c'est un véritable levier de croissance pour votre activité professionnelle.''',
        'author': 'Équipe Espace Agenda',
        'date': '2025-01-10T00:00:00Z',
        'category': 'Avantages',
        'image': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=400&fit=crop',
        'published': True
    },
    {
        'id': '3',
        'title': 'Personnaliser votre plateforme de réservation en marque blanche',
        'slug': 'personnaliser-votre-plateforme-de-reservation-en-marque-blanche',
        'excerpt': 'Votre identité visuelle, vos couleurs, votre logo : créez une expérience 100% cohérente avec votre image professionnelle.',
        'content': '''# Introduction

Dans un monde professionnel où l'image de marque est essentielle, disposer d'une solution en marque blanche n'est plus un luxe mais une nécessité. Espace Agenda vous permet de créer une expérience totalement personnalisée pour vos clients.

## Qu'est-ce qu'une solution en marque blanche ?

Une solution en marque blanche signifie que votre plateforme de réservation est entièrement à votre image : votre logo, vos couleurs, votre nom de domaine personnalisé. Aucune mention du fournisseur technique n'apparaît. Vos clients ne voient que votre marque.

## Les avantages de la personnalisation

Une plateforme personnalisée renforce la confiance de vos clients. Ils reconnaissent immédiatement votre identité visuelle et se sentent en terrain familier. Cela crée une expérience cohérente de bout en bout, de la découverte de vos services jusqu'à la prise de rendez-vous.

## Au-delà du visuel

La personnalisation ne s'arrête pas à l'apparence. Vous pouvez également adapter les questionnaires, les types de consultations, les durées de rendez-vous et bien d'autres paramètres pour coller parfaitement à votre pratique.

## Conclusion

Avec une solution en marque blanche, vous gardez le contrôle total de votre image professionnelle tout en bénéficiant d'une technologie performante et moderne.''',
        'author': 'Équipe Espace Agenda',
        'date': '2025-01-05T00:00:00Z',
        'category': 'Personnalisation',
        'image': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&h=400&fit=crop',
        'published': True
    }
]


async def seed_database():
    """Peuple la base de données avec les articles initiaux"""
    
    # Connection MongoDB
    mongo_url = os.environ['MONGO_URL']
    db_name = os.environ['DB_NAME']
    
    client = AsyncIOMotorClient(mongo_url)
    db = client[db_name]
    
    print(f"🔌 Connexion à MongoDB: {db_name}")
    
    # Vérifier si des articles existent déjà
    existing_count = await db.blog_posts.count_documents({})
    
    if existing_count > 0:
        print(f"⚠️  {existing_count} article(s) déjà présent(s) dans la base de données")
        response = input("Voulez-vous les remplacer ? (y/N): ")
        if response.lower() != 'y':
            print("❌ Opération annulée")
            client.close()
            return
        
        # Supprimer les articles existants
        result = await db.blog_posts.delete_many({})
        print(f"🗑️  {result.deleted_count} article(s) supprimé(s)")
    
    # Insérer les nouveaux articles
    result = await db.blog_posts.insert_many(initial_blog_posts)
    print(f"✅ {len(result.inserted_ids)} article(s) inséré(s) avec succès")
    
    # Afficher les articles insérés
    print("\n📝 Articles insérés:")
    for post in initial_blog_posts:
        print(f"   - {post['title']} (ID: {post['id']})")
    
    client.close()
    print("\n✅ Base de données initialisée avec succès!")


if __name__ == "__main__":
    asyncio.run(seed_database())
