import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, Shield, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1920&q=80" 
            alt="Espace professionnel moderne"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/90 to-white"></div>
        </div>
        
        <div className="relative z-10 py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-6xl">
                Votre solution de prise de rendez-vous{' '}
                <span className="text-amber-700">en marque blanche</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-600">
                Offrez à vos clients une expérience de réservation en ligne fluide et professionnelle, entièrement personnalisée à votre image. Gagnez du temps, réduisez les absences et concentrez-vous sur l'essentiel : votre métier.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link to="/contact">
                  <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                    Demander l'installation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solution">
                  <Button size="lg" variant="outline">
                    Découvrir la solution
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Pourquoi choisir Espace Agenda ?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Une solution pensée pour les praticiens et professionnels de l'accompagnement
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <Card className="border-neutral-200 hover:border-amber-700 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                  Gain de temps immédiat
                </h3>
                <p className="mt-3 text-neutral-600">
                  Fini les appels téléphoniques pour planifier les rendez-vous. Vos clients réservent en ligne 24h/24, vous gérez tout depuis un seul outil.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 hover:border-amber-700 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 text-sky-800">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                  100% votre marque
                </h3>
                <p className="mt-3 text-neutral-600">
                  Solution entièrement en marque blanche : votre logo, vos couleurs, votre identité. Aucune mention du fournisseur technique.
                </p>
              </CardContent>
            </Card>

            <Card className="border-neutral-200 hover:border-amber-700 transition-all duration-300 hover:shadow-lg">
              <CardContent className="pt-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-neutral-900">
                  Installation et accompagnement
                </h3>
                <p className="mt-3 text-neutral-600">
                  Nous installons, configurons et vous formons. Support humain inclus pour vous accompagner au quotidien.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-neutral-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              Comment ça fonctionne ?
            </h2>
            <p className="mt-4 text-lg text-neutral-600">
              Trois étapes simples pour démarrer
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-4xl">
            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Échange et personnalisation',
                  description: 'Nous discutons de vos besoins et configurons votre plateforme selon votre identité visuelle.'
                },
                {
                  step: '2',
                  title: 'Installation et formation',
                  description: 'Nous installons la solution et vous formons à son utilisation pour une prise en main optimale.'
                },
                {
                  step: '3',
                  title: 'Accompagnement continu',
                  description: 'Vous bénéficiez d\'un support humain et d\'évolutions régulières de votre plateforme.'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-amber-700 text-white text-xl font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                    <p className="mt-2 text-neutral-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-sky-900 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Prêt à simplifier votre gestion des rendez-vous ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-sky-100">
              Demandez l'installation de votre solution personnalisée et bénéficiez d'un accompagnement complet.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-sky-900 hover:bg-neutral-100">
                  Demander l'installation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;