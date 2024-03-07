import { FileDown, MoreHorizontal, Plus, Search } from 'lucide-react'
import { Header } from './components/header'
import { Tabs } from './components/tabs'
import { Button } from './components/ui/button'
import { Control, Input } from './components/ui/input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table'


export function App() {

  return (
    <div className="py-10 space-y-8">
      <div>
        <Header />
        <Tabs />
      </div>

      <main className="max-w-6xl mx-auto space-y-5">
        <div className="flex items-center gap-3 ms-2 md:ms-4">
          <h1 className="text-xl font-bold">Tags</h1>
          <Button variant='primary'>
            <Plus className="size-3" />
            Create new
          </Button>
        </div>

         <div className="flex items-start justify-between gap-8 mx-4">
          <Input variant='filter'>
            <Search className='size-3' />
            <Control 
              placeholder="Search tags..." 
            />
          </Input>
          
          <Button type="submit">
            <FileDown className="size-3" />
            Apply filters
          </Button>
        </div> 
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Tag</TableHead>
              <TableHead>Amount of videos</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>
                <div className="flex flex-col gap-0.5">
                  <span className="font-medium">React</span>
                  <span className="text-xs text-zinc-500">15DE51D-151DE-1DE5D1-DED15E4D-DE15DE</span>
                </div>
              </TableCell>
              <TableCell className="text-zinc-300">
                13 video(s)
              </TableCell>
              <TableCell className="text-right">
                <Button size="icon">
                  <MoreHorizontal className="size-4" />
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>       
      </main>
    </div>
  )
}
