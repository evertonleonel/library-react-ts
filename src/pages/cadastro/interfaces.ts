export type TStatus = {
  isActive: boolean;
  description: string;
};

export interface IRentHistory {
  studentName: string;
  class: string;
  withdrawalDate: string;
  deliveryDate: string;
}

export interface IBook {
  id: string;
  tittle: string;
  author: string;
  genre: string;
  status: TStatus;
  image: string;
  systemEntryDate: string;
  synopsis: string;
  rentHistory: IRentHistory[];
}
