'use client';

import { Check, ChevronsUpDown } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/shared/ui/primitives/dropdown-menu';
import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/shared/ui/primitives/sidebar';

type Crypto = {
  id: string;
  label: string;
  imageUrl: string;
};

type CryptoSwitcherProps = { cryptos: Crypto[]; defaultCrypto: Crypto };

export function CryptoSwitcher({ cryptos, defaultCrypto }: CryptoSwitcherProps) {
  const [selectedCrypto, setSelectedCrypto] = useState(defaultCrypto);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Image
                className="text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg"
                src={selectedCrypto.imageUrl}
                alt={selectedCrypto.label}
                width={100}
                height={100}
                preload
                loading="eager"
              />
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">Crypto</span>
                <span className="">{selectedCrypto.label}</span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)" align="start">
            {cryptos.map((crypto) => (
              <DropdownMenuItem key={crypto.id} onSelect={() => setSelectedCrypto(crypto)}>
                <Image
                  className="text-sidebar-primary-foreground flex size-8 items-center justify-center rounded-lg"
                  src={crypto.imageUrl}
                  alt={crypto.label}
                  width={100}
                  height={100}
                  preload
                  loading="eager"
                />
                {crypto.label} {crypto.id === selectedCrypto.id && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
