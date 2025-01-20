
export interface IHair {
	color: string;
	type: string;
}
export interface IUsersAddressCoordinates {
	lat: number;
	lng: number;
}
export interface IUsersAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: IUsersAddressCoordinates;
	country: string;
}
export interface IBank {
	cardExpire: string;
	cardNumber: string;
	cardType: string;
	currency: string;
	iban: string;
}
export interface ICompanyAddressCoordinates {
	lat: number;
	lng: number;
}
export interface ICompanyAddress {
	address: string;
	city: string;
	state: string;
	stateCode: string;
	postalCode: string;
	coordinates: ICompanyAddressCoordinates;
	country: string;
}
export interface ICompany {
	department: string;
	name: string;
	title: string;
	address: ICompanyAddress;
}
export interface ICrypto {
	coin: string;
	wallet: string;
	network: string;
}
export interface IUser {
	id: number;
	firstName: string;
	lastName: string;
	maidenName: string;
	age: number;
	gender: string;
	email: string;
	phone: string;
	username: string;
	password: string;
	birthDate: string;
	image: string;
	bloodGroup: string;
	height: number;
	weight: number;
	eyeColor: string;
	hair: IHair;
	ip: string;
	address: IUsersAddress;
	macAddress: string;
	university: string;
	bank: IBank;
	company: ICompany;
	ein: string;
	ssn: string;
	userAgent: string;
	crypto: ICrypto;
	role: string;
}