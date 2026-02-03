import { MoreHorizontal } from 'lucide-react';
import Image from 'next/image';

import { Avatar } from '@/shared/ui/primitives/avatar';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/shared/ui/primitives/table';

const vaults = [
  {
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '$13,643.21',
    daily: '+$213.8',
    balance: '$13,954.04',
    apy: '8.56%',
    state: 'Fixed',
    startDate: '05.10.2023',
    liquidity: 'high',
    imageUrl:
      'https://dynamic-assets.coinbase.com/e785e0181f1a23a30d9476038d9be91e9f6c63959b538eabbc51a1abc8898940383291eede695c3b8dfaa1829a9b57f5a2d0a16b0523580346c6b8fab67af14b/asset_icons/b57ac673f06a4b0338a596817eb0a50ce16e2059f327dc117744449a47915cb2.png',
  },
  {
    name: 'USDT',
    symbol: 'USDT',
    price: '$1.00',
    daily: '+$45.1',
    balance: '$3,954.04',
    apy: '5.44%',
    state: 'Fixed',
    startDate: '12.03.2023',
    liquidity: 'medium',
    imageUrl:
      'https://dynamic-assets.coinbase.com/41f6a93a3a222078c939115fc304a67c384886b7a9e6c15dcbfa6519dc45f6bb4a586e9c48535d099efa596dbf8a9dd72b05815bcd32ac650c50abb5391a5bd0/asset_icons/1f8489bb280fb0a0fd643c1161312ba49655040e9aaaced5f9ad3eeaf868eadc.png',
  },
  {
    name: 'Ethereum',
    symbol: 'ETH',
    price: '$2,123.87',
    daily: '+$13.5',
    balance: '$3,954.04',
    apy: '4.12%',
    state: 'Flexible',
    startDate: '21.01.2023',
    liquidity: 'low',
    imageUrl:
      'https://dynamic-assets.coinbase.com/dbb4b4983bde81309ddab83eb598358eb44375b930b94687ebe38bc22e52c3b2125258ffb8477a5ef22e33d6bd72e32a506c391caa13af64c00e46613c3e5806/asset_icons/4113b082d21cc5fab17fc8f2d19fb996165bcce635e6900f7fc2d57c4ef33ae9.png',
  },
];

export function VaultTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Vault</TableHead>
          <TableHead>Daily</TableHead>
          <TableHead>Balance ↓</TableHead>
          <TableHead>APY ↓</TableHead>
          <TableHead>State</TableHead>
          <TableHead>Start date</TableHead>
          <TableHead>Liquidity</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {vaults.map((vault) => (
          <TableRow key={vault.symbol}>
            <TableCell className="font-medium">
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <Image src={vault.imageUrl} height={24} width={24} alt={vault.name} />
                </Avatar>
                <div>
                  <div className="font-medium">{vault.name}</div>
                  <div className="text-muted-foreground text-xs">{vault.price}</div>
                </div>
              </div>
            </TableCell>
            <TableCell className="text-green-500">{vault.daily}</TableCell>
            <TableCell>{vault.balance}</TableCell>
            <TableCell>{vault.apy}</TableCell>
            <TableCell>
              <span
                className={`inline-flex items-center rounded-full px-2 py-1 text-xs ${
                  vault.state === 'Fixed' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-green-500/10 text-green-500'
                }`}
              >
                {vault.state}
              </span>
            </TableCell>
            <TableCell>{vault.startDate}</TableCell>
            <TableCell>
              <div className="flex gap-1">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1.5 w-3 rounded-full ${
                      i < (vault.liquidity === 'high' ? 3 : vault.liquidity === 'medium' ? 2 : 1)
                        ? 'bg-primary'
                        : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
            </TableCell>
            <TableCell>
              <MoreHorizontal className="text-muted-foreground h-4 w-4" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
