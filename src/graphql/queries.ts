/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAssembly = /* GraphQL */ `
  query GetAssembly($id: String) {
    getAssembly(id: $id) {
      id
      title
      condominium_id
      condominium_name
      initial_date
      final_date
      description
      ata {
        date
        link
        title
      }
      questions {
        id
        question
        alternatives {
          id
          value
        }
      }
      status
      secretary
      president
    }
  }
`;
export const checkPlan = /* GraphQL */ `
  query CheckPlan($planMyId: String!) {
    checkPlan(planMyId: $planMyId)
  }
`;
export const getCompany = /* GraphQL */ `
  query GetCompany {
    getCompany {
      id
      color
      document
      emails
      image
      invoiceHoldIss
      municipalDocument
      name
      phones
      payId
      Address {
        city
        complement
        neighborhood
        number
        state
        street
        zipCode
      }
    }
  }
`;
export const getCondominium = /* GraphQL */ `
  query GetCondominium($id: String) {
    getCondominium(id: $id) {
      id
      Address {
        city
        complement
        neighborhood
        number
        state
        street
        zipCode
      }
      company_id
      document
      emails
      invoiceHoldIss
      municipalDocument
      name
      phones
      residents
      firstPayDayDate
      messagesPerMouth
      payId
      planMyId
      currentAssemlbyMessage
      currentAtaMessage
      currentWarnsMessage
      valid
    }
  }
`;
export const getMyCompanyUser = /* GraphQL */ `
  query GetMyCompanyUser {
    getMyCompanyUser {
      id
      company_id
      emails
      name
      phones
      appartament
      block_no
      condominium_id
      cpf
      floor
      internal_employee
      permissions {
        assembly
        procuration
        company
        condominium
      }
    }
  }
`;
export const getResidentUsers = /* GraphQL */ `
  query GetResidentUsers($id: String) {
    getResidentUsers(id: $id) {
      id
      name
      phone
      assemblys
      block_no
      condominium_id
      cpf
      filed
      email
      floor
      room
      non_defaulting
      can_send
      image
    }
  }
`;
export const getCompanyUsers = /* GraphQL */ `
  query GetCompanyUsers($id: String) {
    getCompanyUsers(id: $id) {
      id
      company_id
      emails
      name
      phones
      appartament
      block_no
      condominium_id
      cpf
      floor
      internal_employee
      permissions {
        assembly
        procuration
        company
        condominium
      }
    }
  }
`;
export const listAssembly = /* GraphQL */ `
  query ListAssembly($id: String) {
    listAssembly(id: $id) {
      id
      title
      condominium_id
      condominium_name
      initial_date
      final_date
      description
      ata {
        date
        link
        title
      }
      questions {
        id
        question
        alternatives {
          id
          value
        }
      }
      status
      secretary
      president
    }
  }
`;
export const listAssemblyFiled = /* GraphQL */ `
  query ListAssemblyFiled($id: String) {
    listAssemblyFiled(id: $id) {
      id
      title
      condominium_id
      condominium_name
      initial_date
      final_date
      description
      ata {
        date
        link
        title
      }
      questions {
        id
        question
        alternatives {
          id
          value
        }
      }
      status
      secretary
      president
    }
  }
`;
export const listCompany = /* GraphQL */ `
  query ListCompany {
    listCompany {
      id
      color
      document
      emails
      image
      invoiceHoldIss
      municipalDocument
      name
      phones
      payId
      Address {
        city
        complement
        neighborhood
        number
        state
        street
        zipCode
      }
    }
  }
`;
export const listCompanyUsers = /* GraphQL */ `
  query ListCompanyUsers($id: String) {
    listCompanyUsers(id: $id) {
      id
      company_id
      emails
      name
      phones
      appartament
      block_no
      condominium_id
      cpf
      floor
      internal_employee
      permissions {
        assembly
        procuration
        company
        condominium
      }
    }
  }
`;
export const listCondominium = /* GraphQL */ `
  query ListCondominium {
    listCondominium {
      id
      Address {
        city
        complement
        neighborhood
        number
        state
        street
        zipCode
      }
      company_id
      document
      emails
      invoiceHoldIss
      municipalDocument
      name
      phones
      residents
      firstPayDayDate
      messagesPerMouth
      payId
      planMyId
      currentAssemlbyMessage
      currentAtaMessage
      currentWarnsMessage
      valid
    }
  }
`;
export const getProcuration = /* GraphQL */ `
  query GetProcuration($id: String) {
    getProcuration(id: $id) {
      id
      url_photo
      occurence {
        id
        assembly_id
        condominium_id
        discription
        status
        type
        url_photo
        user_id
        user_name
      }
      condominium_id
      discription
      assembly_id
      user_id
      user_name
      type
      status
    }
  }
`;
export const listProcuration = /* GraphQL */ `
  query ListProcuration {
    listProcuration {
      id
      url_photo
      occurence {
        id
        assembly_id
        condominium_id
        discription
        status
        type
        url_photo
        user_id
        user_name
      }
      condominium_id
      discription
      assembly_id
      user_id
      user_name
      type
      status
    }
  }
`;
export const listResidentUsers = /* GraphQL */ `
  query ListResidentUsers($condominium_id: String) {
    listResidentUsers(condominium_id: $condominium_id) {
      id
      name
      phone
      assemblys
      block_no
      condominium_id
      cpf
      filed
      email
      floor
      room
      non_defaulting
      can_send
      image
    }
  }
`;
export const resolveAssembly = /* GraphQL */ `
  query ResolveAssembly($id: String) {
    resolveAssembly(id: $id) {
      historic {
        apartment
        phone
        accepted_type
        name
        response {
          perguntavalue
          respostaid
          respostavalue
          perguntaid
        }
      }
      results {
        question
        answers {
          option
          qtd_votes
        }
      }
    }
  }
`;
export const checkUserPermission = /* GraphQL */ `
  query CheckUserPermission {
    checkUserPermission {
      assembly
      procuration
      company
      condominium
    }
  }
`;
export const getData = /* GraphQL */ `
  query GetData {
    getData {
      user_permissions {
        assembly
        procuration
        company
        condominium
      }
      color
      logo
    }
  }
`;
