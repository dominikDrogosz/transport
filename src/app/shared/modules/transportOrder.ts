interface LoadingAddress {
  street: string;
  houseNo: number;
  localNo: number;
  zipCode: string;
  city: string;
  country: string;
  phone: string;
}

interface LoadingDates {
  dateFrom: Date;
  dateTo: Date;
}

export type OrderStatus = 'DONE'|'IN PROGRESS'|'NEW';

export interface TransportOrder {
  id?: string;
  name: string;
  description: string;
  weight: number;
  volume: string;
  monStandard: boolean;
  loadingAddress: LoadingAddress;
  loadingDates: LoadingDates;
  shipper: string;
  carrier: string;
  status: OrderStatus;
  statusDate: Date;
  shipperAgent: string;
}
