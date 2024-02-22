import { ListVideo, Tags, Settings, Code2 } from 'lucide-react'

export function Tabs() {
  return (
    <div className="border-b border-zinc-800 py-4">
      <nav className="flex flex-col items-center justify-start sm:flex-row gap-3 mx-auto max-w-[1200px]">
        <a href="" className="py-1.5 px-3 bg-zinc-800 text-zinc-100 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent ms-4">
          <ListVideo className="size-4" />
          Uploads
        </a>

        <a href="" className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
          <Tags className="size-4" />
          Tags
        </a>

        <a href="" className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
          <Settings className="size-4" />
          Settings
        </a>

        <a href="" className="py-1.5 px-3 text-zinc-300 inline-flex items-center text-sm gap-1.5 font-medium rounded-full border border-transparent hover:border-zinc-800">
          <Code2 className="size-4" />
          Developers
        </a>
      </nav>
    </div>
  )
}