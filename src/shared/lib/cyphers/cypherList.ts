import { type Cypher } from '@/entities/Cypher/model/types/cypher';

export const cyphers: Cypher[] = [
  {
    id: '1',
    title: 'AES (Rijndael)',
    printFn: '',
    encryptFn: '',
  },
  {
    id: '2',
    title: 'Akelarre',
    printFn: '',
    encryptFn: '',
  },
  {
    id: '3',
    title: 'Caesar',
    encryptFn: 'encrypt_caesar',
    printFn: 'print_caesar',
  }
]
