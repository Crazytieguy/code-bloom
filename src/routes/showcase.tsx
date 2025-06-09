import { createFileRoute } from '@tanstack/react-router'
import { ExternalLink } from 'lucide-react'

export const Route = createFileRoute('/showcase')({
  component: ShowcasePage,
})

const showcaseItems = [
  {
    name: 'storyboard',
    title: 'Storyboard',
    description: 'Create an AI generated storyboard for a screenplay',
  },
  {
    name: 'rebel-rooster',
    title: 'Rebel Rooster',
    description: '2D platformer game',
  },
  {
    name: 'arrows-of-doom',
    title: 'Arrows of Doom',
    description: 'Procedurally generated 3D archery game',
  },
  {
    name: 'split-expense',
    title: 'Split Expense',
    description: 'Group expense tracking',
  },
  {
    name: 'pokemon-ai',
    title: 'Pokémon AI',
    description: 'Procedurally generated Pokémon game with PvP',
  },
  {
    name: 'ltcs',
    title: 'Laser Tag Counter Strike',
    description: 'Manage a live in person laser tag counter strike game',
  },
  {
    name: 'cursor-tag',
    title: 'Cursor Tag',
    description: '1v1 realtime cursor tag game',
  },
  {
    name: 'party-invite',
    title: 'Party Invite',
    description: 'Guest list management with check in QR codes',
  },
  {
    name: 'zk-whistle',
    title: 'ZK Whistle',
    description: 'ZK Email Twitter Verifier',
  },
  {
    name: 'kitsune-war-room',
    title: 'Kitsune War Room',
    description: 'Investor psychoanalyzing for fun and profit',
  },
  {
    name: 'spencer',
    title: 'Spencer',
    description: 'Star Wars quiz',
  },
]

function ShowcasePage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Code Bloom Showcase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {showcaseItems.map((item) => (
          <a
            key={item.name}
            href={`https://${item.name}.code-bloom.app`}
            target="_blank"
            rel="noopener noreferrer"
            className="card card-compact bg-base-100 shadow-lg hover:shadow-xl transition-shadow no-underline"
          >
            <div className="card-body p-4">
              <h2 className="card-title text-base">{item.title}</h2>
              <p className="text-xs text-base-content/70">{item.description}</p>
              <div className="card-actions justify-end mt-2">
                <ExternalLink className="w-3 h-3 text-primary" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}