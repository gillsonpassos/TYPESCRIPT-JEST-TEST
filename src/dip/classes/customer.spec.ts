import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};
const createEnterpriseCustomer = (
  Name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(Name, cnpj);
};

afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    const sut = createIndividualCustomer('Molusco', 'Narigudo', '123.123');
    expect(sut).toHaveProperty('firstName', 'Molusco');
    expect(sut).toHaveProperty('lastName', 'Narigudo');
    expect(sut).toHaveProperty('cpf', '123.123');
  });

  it('should have metHods to get name and idn for individual customers', () => {
    const sut = createIndividualCustomer('Molusco', 'Narigudo', '123.123');
    expect(sut.getName()).toBe('Molusco Narigudo');
    expect(sut.getIDN()).toBe('123.123');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('udemy', '321');
    expect(sut).toHaveProperty('name', 'udemy');
    expect(sut).toHaveProperty('cnpj', '321');
  });

  it('should have metHods to get name and idn for enterprise customer', () => {
    const sut = createEnterpriseCustomer('udemy', '321');
    expect(sut.getName()).toBe('udemy');
    expect(sut.getIDN()).toBe('321');
  });
});
