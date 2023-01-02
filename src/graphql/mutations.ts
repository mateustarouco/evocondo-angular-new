/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const newProcuration = /* GraphQL */ `
  mutation NewProcuration(
    $url_photo: String
    $condominium_id: String
    $assembly_id: String
    $user_id: String
    $user_name: String
    $type: String
    $status: String
  ) {
    newProcuration(
      url_photo: $url_photo
      condominium_id: $condominium_id
      assembly_id: $assembly_id
      user_id: $user_id
      user_name: $user_name
      type: $type
      status: $status
    ) {
      Body
      StatusCode
    }
  }
`;
export const sendAssembly = /* GraphQL */ `
  mutation SendAssembly($data: [UserSendData], $assembly_id: String!) {
    sendAssembly(data: $data, assembly_id: $assembly_id) {
      Body
      StatusCode
    }
  }
`;
export const sendMessage = /* GraphQL */ `
  mutation SendMessage($data: [UserSendData], $id: String!, $hour: String) {
    sendMessage(data: $data, id: $id, hour: $hour) {
      Body
      StatusCode
    }
  }
`;
export const sendAta = /* GraphQL */ `
  mutation SendAta($data: [UserSendData], $id: String!, $hour: String) {
    sendAta(data: $data, id: $id, hour: $hour) {
      Body
      StatusCode
    }
  }
`;
export const toFileAssembly = /* GraphQL */ `
  mutation ToFileAssembly($id: String!) {
    toFileAssembly(id: $id) {
      Body
      StatusCode
    }
  }
`;
export const toFileResident = /* GraphQL */ `
  mutation ToFileResident($id: String!) {
    toFileResident(id: $id) {
      Body
      StatusCode
    }
  }
`;
export const scheduleAssembly = /* GraphQL */ `
  mutation ScheduleAssembly(
    $condominium_id: String!
    $condominium_name: String!
    $description: String!
    $final_date: String
    $initial_date: String
    $warn_date: String
    $questions: [Questions]
    $title: String
    $secretary: String
    $warn_message: String
    $president: String
    $send: String
    $users: [UserSendData]
  ) {
    scheduleAssembly(
      condominium_id: $condominium_id
      condominium_name: $condominium_name
      description: $description
      final_date: $final_date
      initial_date: $initial_date
      warn_date: $warn_date
      questions: $questions
      title: $title
      secretary: $secretary
      warn_message: $warn_message
      president: $president
      send: $send
      users: $users
    ) {
      Body
      StatusCode
    }
  }
`;
export const scheduleAta = /* GraphQL */ `
  mutation ScheduleAta(
    $condominium_id: String!
    $ata_date: String!
    $ata_message: String!
    $doc_link: String!
    $assembly_id: String
  ) {
    scheduleAta(
      condominium_id: $condominium_id
      ata_date: $ata_date
      ata_message: $ata_message
      doc_link: $doc_link
      assembly_id: $assembly_id
    ) {
      Body
      StatusCode
    }
  }
`;
export const endAssembly = /* GraphQL */ `
  mutation EndAssembly($data: [UserSendData], $assembly_id: String!) {
    endAssembly(data: $data, assembly_id: $assembly_id) {
      Body
      StatusCode
    }
  }
`;
export const resolveProcuration = /* GraphQL */ `
  mutation ResolveProcuration(
    $id: String!
    $user_id: String!
    $assembly_id: String!
    $aproved: [aproved_]
  ) {
    resolveProcuration(
      id: $id
      user_id: $user_id
      assembly_id: $assembly_id
      aproved: $aproved
    ) {
      Body
      StatusCode
    }
  }
`;
export const uploadPdf = /* GraphQL */ `
  mutation UploadPdf($id: String!, $pdfLink: String!, $title: String!) {
    uploadPdf(id: $id, pdfLink: $pdfLink, title: $title) {
      Body
      StatusCode
    }
  }
`;
export const newAssembly = /* GraphQL */ `
  mutation NewAssembly(
    $condominium_id: String!
    $condominium_name: String!
    $description: String!
    $final_date: String
    $initial_date: String
    $questions: [Questions]
    $title: String
    $secretary: String
    $president: String
    $send: String
    $users: [UserSendData]
  ) {
    newAssembly(
      condominium_id: $condominium_id
      condominium_name: $condominium_name
      description: $description
      final_date: $final_date
      initial_date: $initial_date
      questions: $questions
      title: $title
      secretary: $secretary
      president: $president
      send: $send
      users: $users
    ) {
      Body
      StatusCode
    }
  }
`;
export const newCompany = /* GraphQL */ `
  mutation NewCompany(
    $address_no: String!
    $city: String!
    $cnpj: String!
    $company_name: String!
    $complement: String!
    $country: String!
    $district: String!
    $email: String!
    $fantasy_name: String!
    $name: String!
    $phone: String!
    $state: String!
    $street: String!
    $zip_code: String!
  ) {
    newCompany(
      address_no: $address_no
      city: $city
      cnpj: $cnpj
      company_name: $company_name
      complement: $complement
      country: $country
      district: $district
      email: $email
      fantasy_name: $fantasy_name
      name: $name
      phone: $phone
      state: $state
      street: $street
      zip_code: $zip_code
    ) {
      Body
      StatusCode
    }
  }
`;
export const newResidentUser = /* GraphQL */ `
  mutation NewResidentUser(
    $name: String
    $phone: String
    $block_no: String
    $condominium_id: String
    $cpf: String
    $image: String
    $email: String
    $floor: String
    $room: String
    $non_defaulting: Boolean
    $can_send: Boolean
  ) {
    newResidentUser(
      name: $name
      phone: $phone
      block_no: $block_no
      condominium_id: $condominium_id
      cpf: $cpf
      image: $image
      email: $email
      floor: $floor
      room: $room
      non_defaulting: $non_defaulting
      can_send: $can_send
    ) {
      Body
      StatusCode
    }
  }
`;
export const newUserCompany = /* GraphQL */ `
  mutation NewUserCompany(
    $name: String
    $emails: String
    $phones: String
    $internal_employee: String
    $appartament: String
    $block_no: String
    $company_id: String
    $condominium_id: [String]
    $cpf: String
    $floor: String
    $permissions: Permissions
  ) {
    newUserCompany(
      name: $name
      emails: $emails
      phones: $phones
      internal_employee: $internal_employee
      appartament: $appartament
      block_no: $block_no
      company_id: $company_id
      condominium_id: $condominium_id
      cpf: $cpf
      floor: $floor
      permissions: $permissions
    ) {
      Body
      StatusCode
    }
  }
`;
export const updateAssemby = /* GraphQL */ `
  mutation UpdateAssemby(
    $id: String
    $title: String
    $condominium_id: String
    $condominium_name: String
    $initial_date: String
    $final_date: String
    $description: String
    $ata: String
    $questions: [Questions]
    $status: String
    $secretary: String
    $president: String
  ) {
    updateAssemby(
      id: $id
      title: $title
      condominium_id: $condominium_id
      condominium_name: $condominium_name
      initial_date: $initial_date
      final_date: $final_date
      description: $description
      ata: $ata
      questions: $questions
      status: $status
      secretary: $secretary
      president: $president
    ) {
      Body
      StatusCode
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $id: String
    $phones: String
    $emails: String
    $name: String
    $municipalDocument: String
    $image: String
    $document: String
    $color: String
    $Address: Address_
  ) {
    updateCompany(
      id: $id
      phones: $phones
      emails: $emails
      name: $name
      municipalDocument: $municipalDocument
      image: $image
      document: $document
      color: $color
      Address: $Address
    ) {
      Body
      StatusCode
    }
  }
`;
export const updateCondominium = /* GraphQL */ `
  mutation UpdateCondominium(
    $id: String
    $name: String
    $document: String
    $phones: String
    $municipalDocument: String
    $residents: String
    $zipCode: String
    $street: String
    $number: String
    $planMyId: String
    $complement: String
    $neighborhood: String
    $city: String
    $state: String
  ) {
    updateCondominium(
      id: $id
      name: $name
      document: $document
      phones: $phones
      municipalDocument: $municipalDocument
      residents: $residents
      zipCode: $zipCode
      street: $street
      number: $number
      planMyId: $planMyId
      complement: $complement
      neighborhood: $neighborhood
      city: $city
      state: $state
    ) {
      Body
      StatusCode
    }
  }
`;
export const updateResident = /* GraphQL */ `
  mutation UpdateResident(
    $id: String
    $block_no: String
    $condominium_id: String
    $cpf: String
    $email: String
    $filed: String
    $floor: String
    $name: String
    $phone: String
    $room: String
    $image: String
    $non_defaulting: String
    $can_send: String
  ) {
    updateResident(
      id: $id
      block_no: $block_no
      condominium_id: $condominium_id
      cpf: $cpf
      email: $email
      filed: $filed
      floor: $floor
      name: $name
      phone: $phone
      room: $room
      image: $image
      non_defaulting: $non_defaulting
      can_send: $can_send
    ) {
      Body
      StatusCode
    }
  }
`;
export const updateUserCompany = /* GraphQL */ `
  mutation UpdateUserCompany(
    $id: String
    $company_id: String
    $internal_employee: String
    $name: String
    $cpf: String
    $block_no: String
    $phone: String
    $email: String
    $floor: String
    $appartament: String
    $condominium_id: [String]
    $permissions: Permissions
  ) {
    updateUserCompany(
      id: $id
      company_id: $company_id
      internal_employee: $internal_employee
      name: $name
      cpf: $cpf
      block_no: $block_no
      phone: $phone
      email: $email
      floor: $floor
      appartament: $appartament
      condominium_id: $condominium_id
      permissions: $permissions
    ) {
      Body
      StatusCode
    }
  }
`;
export const createChargeCondominium = /* GraphQL */ `
  mutation CreateChargeCondominium($id: String) {
    createChargeCondominium(id: $id)
  }
`;
export const createCondominium = /* GraphQL */ `
  mutation CreateCondominium(
    $city: String
    $cnpj: String
    $company_id: String
    $complement: String
    $email: String
    $municipalDocument: String
    $name: String
    $neighborhood: String
    $number: String
    $phone: String
    $planMyId: String
    $windows: String
    $residents: String
    $state: String
    $street: String
    $zipCode: String
  ) {
    createCondominium(
      city: $city
      cnpj: $cnpj
      company_id: $company_id
      complement: $complement
      email: $email
      municipalDocument: $municipalDocument
      name: $name
      neighborhood: $neighborhood
      number: $number
      phone: $phone
      planMyId: $planMyId
      windows: $windows
      residents: $residents
      state: $state
      street: $street
      zipCode: $zipCode
    ) {
      Body
      StatusCode
    }
  }
`;
