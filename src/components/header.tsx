import { ChevronDown } from 'lucide-react';
import nivoLogo from '../assets/logo-n.svg';
import { Badge } from './ui/badge';

export function Header() {
  return (
    <div className="max-w-[1200px] mx-[auto] my-8">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between gap-8 mx-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2.5">
            <img src={nivoLogo} alt="logo-n" />
            <Badge>BETA</Badge>
          </div>

          <svg
            width="6"
            height="16"
            viewBox="0 0 6 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.18372"
              y1="15.598"
              x2="5.32483"
              y2="0.143194"
              className="stroke-zinc-700"
            />
          </svg>

          <div className="flex items-center gap-2.5">
            <img
              src="https://github.com/rocketseat.png"
              className="size-5 rounded-full"
              alt=""
            />
            <span className="text-sm font-medium text-zinc-100">Rocketseat</span>
            <Badge variant="primary">PRO</Badge>
            <ChevronDown className="text-zinc-600 size-4" />
          </div>

          <svg
            width="6"
            height="16"
            viewBox="0 0 6 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1.18372"
              y1="15.598"
              x2="5.32483"
              y2="0.143194"
              className="stroke-zinc-700"
            />
          </svg>

          <div className="flex items-center gap-2.5">
            <span className="text-sm font-medium text-zinc-100">Ignite</span>
            <ChevronDown className="text-zinc-600 size-4" />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex flex-col items-end gap-0.5">
            <span className="text-sm font-medium">Eduardo Oliveira</span>
            <span className="text-xs text-zinc-400">eos.eduardooliveira@gmail.com</span>
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/19678263?v=4"
            className="size-8 rounded-full"
            alt=""
          />
          <ChevronDown className="size-4 text-zinc-600" />
        </div>
      </div>
    </div>
  );
}
