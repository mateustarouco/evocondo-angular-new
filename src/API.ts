/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Responses = {
  __typename: "Responses",
  Body?: string | null,
  StatusCode?: string | null,
};

export type UserSendData = {
  condominium_id?: string | null,
  user_phone?: string | null,
  stage?: string | null,
  can_send?: string | null,
  user_name?: string | null,
  user_id?: string | null,
};

export type Questions = {
  id?: string | null,
  question?: string | null,
  alternatives?: Array< Alternative | null > | null,
};

export type Alternative = {
  id?: string | null,
  value?: string | null,
};

export type aproved_ = {
  i?: string | null,
  value?: string | null,
  id?: string | null,
};

export type Permissions = {
  assembly?: string | null,
  procuration?: string | null,
  company?: string | null,
  condominium?: string | null,
};

export type Address_ = {
  city?: string | null,
  complement?: string | null,
  neighborhood?: string | null,
  number?: string | null,
  state?: string | null,
  street?: string | null,
  zipCode?: string | null,
};

export type Assembly = {
  __typename: "Assembly",
  id: string,
  title: string,
  condominium_id: string,
  condominium_name: string,
  initial_date: string,
  final_date: string,
  description: string,
  ata?:  Array<Ata | null > | null,
  questions?:  Array<AssemblyQuestions | null > | null,
  status?: string | null,
  secretary?: string | null,
  president?: string | null,
};

export type Ata = {
  __typename: "Ata",
  date: string,
  link: string,
  title: string,
};

export type AssemblyQuestions = {
  __typename: "AssemblyQuestions",
  id?: string | null,
  question?: string | null,
  alternatives?:  Array<AlternativeQuestions | null > | null,
};

export type AlternativeQuestions = {
  __typename: "AlternativeQuestions",
  id?: string | null,
  value?: string | null,
};

export type CompanyResponse = {
  __typename: "CompanyResponse",
  id?: string | null,
  color?: string | null,
  document?: string | null,
  emails?: string | null,
  image?: string | null,
  invoiceHoldIss?: string | null,
  municipalDocument?: string | null,
  name?: string | null,
  phones?: string | null,
  payId?: string | null,
  Address?: Address | null,
};

export type Address = {
  __typename: "Address",
  city?: string | null,
  complement?: string | null,
  neighborhood?: string | null,
  number?: string | null,
  state?: string | null,
  street?: string | null,
  zipCode?: string | null,
};

export type Condominium = {
  __typename: "Condominium",
  id?: string | null,
  Address?: Address | null,
  company_id?: string | null,
  document?: string | null,
  emails?: Array< string | null > | null,
  invoiceHoldIss?: string | null,
  municipalDocument?: string | null,
  name?: string | null,
  phones?: Array< string | null > | null,
  residents?: string | null,
  firstPayDayDate?: string | null,
  messagesPerMouth?: string | null,
  payId?: string | null,
  planMyId?: string | null,
  currentAssemlbyMessage?: string | null,
  currentAtaMessage?: string | null,
  currentWarnsMessage?: string | null,
  valid?: string | null,
};

export type companyUserResponse = {
  __typename: "companyUserResponse",
  id?: string | null,
  company_id?: string | null,
  emails?: string | null,
  name?: string | null,
  phones?: string | null,
  appartament?: string | null,
  block_no?: string | null,
  condominium_id?: string | null,
  cpf?: string | null,
  floor?: string | null,
  internal_employee?: string | null,
  permissions?: Permissions_ | null,
};

export type Permissions_ = {
  __typename: "Permissions_",
  assembly?: string | null,
  procuration?: string | null,
  company?: string | null,
  condominium?: string | null,
};

export type condominiumUserResponse = {
  __typename: "condominiumUserResponse",
  id?: string | null,
  name?: string | null,
  phone?: string | null,
  assemblys?: Array< string | null > | null,
  block_no?: string | null,
  condominium_id?: string | null,
  cpf?: string | null,
  filed?: string | null,
  email?: string | null,
  floor?: string | null,
  room?: string | null,
  non_defaulting?: boolean | null,
  can_send?: boolean | null,
  image?: string | null,
};

export type Procuration = {
  __typename: "Procuration",
  id?: string | null,
  url_photo?: string | null,
  occurence?:  Array<Occurence_ | null > | null,
  condominium_id?: string | null,
  discription?: string | null,
  assembly_id?: string | null,
  user_id?: string | null,
  user_name?: string | null,
  type?: string | null,
  status?: string | null,
};

export type Occurence_ = {
  __typename: "Occurence_",
  id?: string | null,
  assembly_id?: string | null,
  condominium_id?: string | null,
  discription?: string | null,
  status?: string | null,
  type?: string | null,
  url_photo?: string | null,
  user_id?: string | null,
  user_name?: string | null,
};

export type AssemblyResponse = {
  __typename: "AssemblyResponse",
  historic?:  Array<AssembltResponseHistoric | null > | null,
  results?:  Array<AssemblyResults | null > | null,
};

export type AssembltResponseHistoric = {
  __typename: "AssembltResponseHistoric",
  apartment?: string | null,
  phone?: string | null,
  accepted_type?: string | null,
  name?: string | null,
  response?:  Array<historicAssembly | null > | null,
};

export type historicAssembly = {
  __typename: "historicAssembly",
  perguntavalue?: string | null,
  respostaid?: string | null,
  respostavalue?: string | null,
  perguntaid?: string | null,
};

export type AssemblyResults = {
  __typename: "AssemblyResults",
  question?: string | null,
  answers?:  Array<AssemblyResp | null > | null,
};

export type AssemblyResp = {
  __typename: "AssemblyResp",
  option?: string | null,
  qtd_votes?: string | null,
};

export type UserPermissions = {
  __typename: "UserPermissions",
  assembly?: string | null,
  procuration?: string | null,
  company?: string | null,
  condominium?: string | null,
};

export type DataLoad = {
  __typename: "DataLoad",
  user_permissions?: Permissions_ | null,
  color?: string | null,
  logo?: string | null,
};

export type NewProcurationMutationVariables = {
  url_photo?: string | null,
  condominium_id?: string | null,
  assembly_id?: string | null,
  user_id?: string | null,
  user_name?: string | null,
  type?: string | null,
  status?: string | null,
};

export type NewProcurationMutation = {
  newProcuration:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type SendAssemblyMutationVariables = {
  data?: Array< UserSendData | null > | null,
  assembly_id: string,
};

export type SendAssemblyMutation = {
  sendAssembly:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type SendMessageMutationVariables = {
  data?: Array< UserSendData | null > | null,
  id: string,
  hour?: string | null,
};

export type SendMessageMutation = {
  sendMessage:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type SendAtaMutationVariables = {
  data?: Array< UserSendData | null > | null,
  id: string,
  hour?: string | null,
};

export type SendAtaMutation = {
  sendAta:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type ToFileAssemblyMutationVariables = {
  id: string,
};

export type ToFileAssemblyMutation = {
  toFileAssembly:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type ToFileResidentMutationVariables = {
  id: string,
};

export type ToFileResidentMutation = {
  toFileResident:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type ScheduleAssemblyMutationVariables = {
  condominium_id: string,
  condominium_name: string,
  description: string,
  final_date?: string | null,
  initial_date?: string | null,
  warn_date?: string | null,
  questions?: Array< Questions | null > | null,
  title?: string | null,
  secretary?: string | null,
  warn_message?: string | null,
  president?: string | null,
  send?: string | null,
  users?: Array< UserSendData | null > | null,
};

export type ScheduleAssemblyMutation = {
  scheduleAssembly:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type ScheduleAtaMutationVariables = {
  condominium_id: string,
  ata_date: string,
  ata_message: string,
  doc_link: string,
  assembly_id?: string | null,
};

export type ScheduleAtaMutation = {
  scheduleAta:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type EndAssemblyMutationVariables = {
  data?: Array< UserSendData | null > | null,
  assembly_id: string,
};

export type EndAssemblyMutation = {
  endAssembly:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type ResolveProcurationMutationVariables = {
  id: string,
  user_id: string,
  assembly_id: string,
  aproved?: Array< aproved_ | null > | null,
};

export type ResolveProcurationMutation = {
  resolveProcuration:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UploadPdfMutationVariables = {
  id: string,
  pdfLink: string,
  title: string,
};

export type UploadPdfMutation = {
  uploadPdf?:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  } | null,
};

export type NewAssemblyMutationVariables = {
  condominium_id: string,
  condominium_name: string,
  description: string,
  final_date?: string | null,
  initial_date?: string | null,
  questions?: Array< Questions | null > | null,
  title?: string | null,
  secretary?: string | null,
  president?: string | null,
  send?: string | null,
  users?: Array< UserSendData | null > | null,
};

export type NewAssemblyMutation = {
  newAssembly:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type NewCompanyMutationVariables = {
  address_no: string,
  city: string,
  cnpj: string,
  company_name: string,
  complement: string,
  country: string,
  district: string,
  email: string,
  fantasy_name: string,
  name: string,
  phone: string,
  state: string,
  street: string,
  zip_code: string,
};

export type NewCompanyMutation = {
  newCompany:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type NewResidentUserMutationVariables = {
  name?: string | null,
  phone?: string | null,
  block_no?: string | null,
  condominium_id?: string | null,
  cpf?: string | null,
  image?: string | null,
  email?: string | null,
  floor?: string | null,
  room?: string | null,
  non_defaulting?: boolean | null,
  can_send?: boolean | null,
};

export type NewResidentUserMutation = {
  newResidentUser:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type NewUserCompanyMutationVariables = {
  name?: string | null,
  emails?: string | null,
  phones?: string | null,
  internal_employee?: string | null,
  appartament?: string | null,
  block_no?: string | null,
  company_id?: string | null,
  condominium_id?: Array< string | null > | null,
  cpf?: string | null,
  floor?: string | null,
  permissions?: Permissions | null,
};

export type NewUserCompanyMutation = {
  newUserCompany:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UpdateAssembyMutationVariables = {
  id?: string | null,
  title?: string | null,
  condominium_id?: string | null,
  condominium_name?: string | null,
  initial_date?: string | null,
  final_date?: string | null,
  description?: string | null,
  ata?: string | null,
  questions?: Array< Questions | null > | null,
  status?: string | null,
  secretary?: string | null,
  president?: string | null,
};

export type UpdateAssembyMutation = {
  updateAssemby:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UpdateCompanyMutationVariables = {
  id?: string | null,
  phones?: string | null,
  emails?: string | null,
  name?: string | null,
  municipalDocument?: string | null,
  image?: string | null,
  document?: string | null,
  color?: string | null,
  Address?: Address_ | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UpdateCondominiumMutationVariables = {
  id?: string | null,
  name?: string | null,
  document?: string | null,
  phones?: string | null,
  municipalDocument?: string | null,
  residents?: string | null,
  zipCode?: string | null,
  street?: string | null,
  number?: string | null,
  planMyId?: string | null,
  complement?: string | null,
  neighborhood?: string | null,
  city?: string | null,
  state?: string | null,
};

export type UpdateCondominiumMutation = {
  updateCondominium:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UpdateResidentMutationVariables = {
  id?: string | null,
  block_no?: string | null,
  condominium_id?: string | null,
  cpf?: string | null,
  email?: string | null,
  filed?: string | null,
  floor?: string | null,
  name?: string | null,
  phone?: string | null,
  room?: string | null,
  image?: string | null,
  non_defaulting?: string | null,
  can_send?: string | null,
};

export type UpdateResidentMutation = {
  updateResident:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type UpdateUserCompanyMutationVariables = {
  id?: string | null,
  company_id?: string | null,
  internal_employee?: string | null,
  name?: string | null,
  cpf?: string | null,
  block_no?: string | null,
  phone?: string | null,
  email?: string | null,
  floor?: string | null,
  appartament?: string | null,
  condominium_id?: Array< string | null > | null,
  permissions?: Permissions | null,
};

export type UpdateUserCompanyMutation = {
  updateUserCompany:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  },
};

export type CreateChargeCondominiumMutationVariables = {
  id?: string | null,
};

export type CreateChargeCondominiumMutation = {
  createChargeCondominium?: string | null,
};

export type CreateCondominiumMutationVariables = {
  city?: string | null,
  cnpj?: string | null,
  company_id?: string | null,
  complement?: string | null,
  email?: string | null,
  municipalDocument?: string | null,
  name?: string | null,
  neighborhood?: string | null,
  number?: string | null,
  phone?: string | null,
  planMyId?: string | null,
  windows?: string | null,
  residents?: string | null,
  state?: string | null,
  street?: string | null,
  zipCode?: string | null,
};

export type CreateCondominiumMutation = {
  createCondominium?:  {
    __typename: "Responses",
    Body?: string | null,
    StatusCode?: string | null,
  } | null,
};

export type GetAssemblyQueryVariables = {
  id?: string | null,
};

export type GetAssemblyQuery = {
  getAssembly?:  {
    __typename: "Assembly",
    id: string,
    title: string,
    condominium_id: string,
    condominium_name: string,
    initial_date: string,
    final_date: string,
    description: string,
    ata?:  Array< {
      __typename: "Ata",
      date: string,
      link: string,
      title: string,
    } | null > | null,
    questions?:  Array< {
      __typename: "AssemblyQuestions",
      id?: string | null,
      question?: string | null,
      alternatives?:  Array< {
        __typename: "AlternativeQuestions",
        id?: string | null,
        value?: string | null,
      } | null > | null,
    } | null > | null,
    status?: string | null,
    secretary?: string | null,
    president?: string | null,
  } | null,
};

export type CheckPlanQueryVariables = {
  planMyId: string,
};

export type CheckPlanQuery = {
  checkPlan: string,
};

export type GetCompanyQuery = {
  getCompany?:  {
    __typename: "CompanyResponse",
    id?: string | null,
    color?: string | null,
    document?: string | null,
    emails?: string | null,
    image?: string | null,
    invoiceHoldIss?: string | null,
    municipalDocument?: string | null,
    name?: string | null,
    phones?: string | null,
    payId?: string | null,
    Address?:  {
      __typename: "Address",
      city?: string | null,
      complement?: string | null,
      neighborhood?: string | null,
      number?: string | null,
      state?: string | null,
      street?: string | null,
      zipCode?: string | null,
    } | null,
  } | null,
};

export type GetCondominiumQueryVariables = {
  id?: string | null,
};

export type GetCondominiumQuery = {
  getCondominium?:  {
    __typename: "Condominium",
    id?: string | null,
    Address?:  {
      __typename: "Address",
      city?: string | null,
      complement?: string | null,
      neighborhood?: string | null,
      number?: string | null,
      state?: string | null,
      street?: string | null,
      zipCode?: string | null,
    } | null,
    company_id?: string | null,
    document?: string | null,
    emails?: Array< string | null > | null,
    invoiceHoldIss?: string | null,
    municipalDocument?: string | null,
    name?: string | null,
    phones?: Array< string | null > | null,
    residents?: string | null,
    firstPayDayDate?: string | null,
    messagesPerMouth?: string | null,
    payId?: string | null,
    planMyId?: string | null,
    currentAssemlbyMessage?: string | null,
    currentAtaMessage?: string | null,
    currentWarnsMessage?: string | null,
    valid?: string | null,
  } | null,
};

export type GetMyCompanyUserQuery = {
  getMyCompanyUser?:  {
    __typename: "companyUserResponse",
    id?: string | null,
    company_id?: string | null,
    emails?: string | null,
    name?: string | null,
    phones?: string | null,
    appartament?: string | null,
    block_no?: string | null,
    condominium_id?: string | null,
    cpf?: string | null,
    floor?: string | null,
    internal_employee?: string | null,
    permissions?:  {
      __typename: "Permissions_",
      assembly?: string | null,
      procuration?: string | null,
      company?: string | null,
      condominium?: string | null,
    } | null,
  } | null,
};

export type GetResidentUsersQueryVariables = {
  id?: string | null,
};

export type GetResidentUsersQuery = {
  getResidentUsers?:  {
    __typename: "condominiumUserResponse",
    id?: string | null,
    name?: string | null,
    phone?: string | null,
    assemblys?: Array< string | null > | null,
    block_no?: string | null,
    condominium_id?: string | null,
    cpf?: string | null,
    filed?: string | null,
    email?: string | null,
    floor?: string | null,
    room?: string | null,
    non_defaulting?: boolean | null,
    can_send?: boolean | null,
    image?: string | null,
  } | null,
};

export type GetCompanyUsersQueryVariables = {
  id?: string | null,
};

export type GetCompanyUsersQuery = {
  getCompanyUsers?:  {
    __typename: "companyUserResponse",
    id?: string | null,
    company_id?: string | null,
    emails?: string | null,
    name?: string | null,
    phones?: string | null,
    appartament?: string | null,
    block_no?: string | null,
    condominium_id?: string | null,
    cpf?: string | null,
    floor?: string | null,
    internal_employee?: string | null,
    permissions?:  {
      __typename: "Permissions_",
      assembly?: string | null,
      procuration?: string | null,
      company?: string | null,
      condominium?: string | null,
    } | null,
  } | null,
};

export type ListAssemblyQueryVariables = {
  id?: string | null,
};

export type ListAssemblyQuery = {
  listAssembly?:  Array< {
    __typename: "Assembly",
    id: string,
    title: string,
    condominium_id: string,
    condominium_name: string,
    initial_date: string,
    final_date: string,
    description: string,
    ata?:  Array< {
      __typename: "Ata",
      date: string,
      link: string,
      title: string,
    } | null > | null,
    questions?:  Array< {
      __typename: "AssemblyQuestions",
      id?: string | null,
      question?: string | null,
      alternatives?:  Array< {
        __typename: "AlternativeQuestions",
        id?: string | null,
        value?: string | null,
      } | null > | null,
    } | null > | null,
    status?: string | null,
    secretary?: string | null,
    president?: string | null,
  } | null > | null,
};

export type ListAssemblyFiledQueryVariables = {
  id?: string | null,
};

export type ListAssemblyFiledQuery = {
  listAssemblyFiled?:  Array< {
    __typename: "Assembly",
    id: string,
    title: string,
    condominium_id: string,
    condominium_name: string,
    initial_date: string,
    final_date: string,
    description: string,
    ata?:  Array< {
      __typename: "Ata",
      date: string,
      link: string,
      title: string,
    } | null > | null,
    questions?:  Array< {
      __typename: "AssemblyQuestions",
      id?: string | null,
      question?: string | null,
      alternatives?:  Array< {
        __typename: "AlternativeQuestions",
        id?: string | null,
        value?: string | null,
      } | null > | null,
    } | null > | null,
    status?: string | null,
    secretary?: string | null,
    president?: string | null,
  } | null > | null,
};

export type ListCompanyQuery = {
  listCompany?:  Array< {
    __typename: "CompanyResponse",
    id?: string | null,
    color?: string | null,
    document?: string | null,
    emails?: string | null,
    image?: string | null,
    invoiceHoldIss?: string | null,
    municipalDocument?: string | null,
    name?: string | null,
    phones?: string | null,
    payId?: string | null,
    Address?:  {
      __typename: "Address",
      city?: string | null,
      complement?: string | null,
      neighborhood?: string | null,
      number?: string | null,
      state?: string | null,
      street?: string | null,
      zipCode?: string | null,
    } | null,
  } | null > | null,
};

export type ListCompanyUsersQueryVariables = {
  id?: string | null,
};

export type ListCompanyUsersQuery = {
  listCompanyUsers?:  Array< {
    __typename: "companyUserResponse",
    id?: string | null,
    company_id?: string | null,
    emails?: string | null,
    name?: string | null,
    phones?: string | null,
    appartament?: string | null,
    block_no?: string | null,
    condominium_id?: string | null,
    cpf?: string | null,
    floor?: string | null,
    internal_employee?: string | null,
    permissions?:  {
      __typename: "Permissions_",
      assembly?: string | null,
      procuration?: string | null,
      company?: string | null,
      condominium?: string | null,
    } | null,
  } | null > | null,
};

export type ListCondominiumQuery = {
  listCondominium?:  Array< {
    __typename: "Condominium",
    id?: string | null,
    Address?:  {
      __typename: "Address",
      city?: string | null,
      complement?: string | null,
      neighborhood?: string | null,
      number?: string | null,
      state?: string | null,
      street?: string | null,
      zipCode?: string | null,
    } | null,
    company_id?: string | null,
    document?: string | null,
    emails?: Array< string | null > | null,
    invoiceHoldIss?: string | null,
    municipalDocument?: string | null,
    name?: string | null,
    phones?: Array< string | null > | null,
    residents?: string | null,
    firstPayDayDate?: string | null,
    messagesPerMouth?: string | null,
    payId?: string | null,
    planMyId?: string | null,
    currentAssemlbyMessage?: string | null,
    currentAtaMessage?: string | null,
    currentWarnsMessage?: string | null,
    valid?: string | null,
  } | null > | null,
};

export type GetProcurationQueryVariables = {
  id?: string | null,
};

export type GetProcurationQuery = {
  getProcuration?:  {
    __typename: "Procuration",
    id?: string | null,
    url_photo?: string | null,
    occurence?:  Array< {
      __typename: "Occurence_",
      id?: string | null,
      assembly_id?: string | null,
      condominium_id?: string | null,
      discription?: string | null,
      status?: string | null,
      type?: string | null,
      url_photo?: string | null,
      user_id?: string | null,
      user_name?: string | null,
    } | null > | null,
    condominium_id?: string | null,
    discription?: string | null,
    assembly_id?: string | null,
    user_id?: string | null,
    user_name?: string | null,
    type?: string | null,
    status?: string | null,
  } | null,
};

export type ListProcurationQuery = {
  listProcuration?:  Array< {
    __typename: "Procuration",
    id?: string | null,
    url_photo?: string | null,
    occurence?:  Array< {
      __typename: "Occurence_",
      id?: string | null,
      assembly_id?: string | null,
      condominium_id?: string | null,
      discription?: string | null,
      status?: string | null,
      type?: string | null,
      url_photo?: string | null,
      user_id?: string | null,
      user_name?: string | null,
    } | null > | null,
    condominium_id?: string | null,
    discription?: string | null,
    assembly_id?: string | null,
    user_id?: string | null,
    user_name?: string | null,
    type?: string | null,
    status?: string | null,
  } | null > | null,
};

export type ListResidentUsersQueryVariables = {
  condominium_id?: string | null,
};

export type ListResidentUsersQuery = {
  listResidentUsers?:  Array< {
    __typename: "condominiumUserResponse",
    id?: string | null,
    name?: string | null,
    phone?: string | null,
    assemblys?: Array< string | null > | null,
    block_no?: string | null,
    condominium_id?: string | null,
    cpf?: string | null,
    filed?: string | null,
    email?: string | null,
    floor?: string | null,
    room?: string | null,
    non_defaulting?: boolean | null,
    can_send?: boolean | null,
    image?: string | null,
  } | null > | null,
};

export type ResolveAssemblyQueryVariables = {
  id?: string | null,
};

export type ResolveAssemblyQuery = {
  resolveAssembly?:  {
    __typename: "AssemblyResponse",
    historic?:  Array< {
      __typename: "AssembltResponseHistoric",
      apartment?: string | null,
      phone?: string | null,
      accepted_type?: string | null,
      name?: string | null,
      response?:  Array< {
        __typename: "historicAssembly",
        perguntavalue?: string | null,
        respostaid?: string | null,
        respostavalue?: string | null,
        perguntaid?: string | null,
      } | null > | null,
    } | null > | null,
    results?:  Array< {
      __typename: "AssemblyResults",
      question?: string | null,
      answers?:  Array< {
        __typename: "AssemblyResp",
        option?: string | null,
        qtd_votes?: string | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export type CheckUserPermissionQuery = {
  checkUserPermission?:  {
    __typename: "UserPermissions",
    assembly?: string | null,
    procuration?: string | null,
    company?: string | null,
    condominium?: string | null,
  } | null,
};

export type GetDataQuery = {
  getData?:  {
    __typename: "DataLoad",
    user_permissions?:  {
      __typename: "Permissions_",
      assembly?: string | null,
      procuration?: string | null,
      company?: string | null,
      condominium?: string | null,
    } | null,
    color?: string | null,
    logo?: string | null,
  } | null,
};
