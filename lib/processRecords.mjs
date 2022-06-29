import apiKey from '../secret.json' assert { type: 'json' }

const usrQueries = [
  'SO%3DACTA%20CHIRURGIAE%20ORTHOPAEDICAE%20ET%20TRAUMATOLOGIAE%20CECHOSLOVACA%20or%20SO%3DACTA%20ORTHOPAEDICA%20or%20SO%3DACTA%20ORTHOPAEDICA%20BELGICA%20or%20SO%3DACTA%20ORTHOPAEDICA%20ET%20TRAUMATOLOGICA%20TURCICA%20or%20SO%3Dacta%20ortopedica%20brasileira%20or%20SO%3DADVANCES%20IN%20ORTHOPEDICS%20or%20SO%3DAMERICAN%20JOURNAL%20OF%20SPORTS%20MEDICINE%20or%20SO%3DANNALS%20OF%20JOINT%20or%20SO%3DARCHIVES%20OF%20BONE%20%22AND%22%20JOINT%20SURGERY%20ABJS%20or%20SO%3DARCHIVES%20OF%20ORTHOPAEDIC%20%22AND%22%20TRAUMA%20SURGERY%20or%20SO%3DARCHIVES%20OF%20OSTEOPOROSIS%20or%20SO%3DARCHIVES%20OF%20TRAUMA%20RESEARCH%20or%20SO%3DARTHROSCOPY%20TECHNIQUES%20or%20SO%3DARTHROSCOPY%20THE%20JOURNAL%20OF%20ARTHROSCOPIC%20%22AND%22%20RELATED%20SURGERY%20or%20SO%3DASIAN%20JOURNAL%20OF%20ENDOSCOPIC%20SURGERY%20or%20SO%3DASIAN%20SPINE%20JOURNAL%20or%20SO%3DASIA%20PACIFIC%20JOURNAL%20OF%20SPORT%20MEDICINE%20ARTHROSCOPY%20REHABILITATION%20%22AND%22%20TECHNOLOGY%20or%20SO%3DBMC%20MUSCULOSKELETAL%20DISORDERS%20or%20SO%3DBONE%20JOINT%20JOURNAL%20or%20SO%3DBONE%20JOINT%20RESEARCH%20or%20SO%3DBRAZILIAN%20JOURNAL%20OF%20PHYSICAL%20THERAPY%20or%20SO%3DBULLETIN%20OF%20THE%20HOSPITAL%20FOR%20JOINT%20DISEASES%20or%20SO%3DCARTILAGE%20or%20SO%3DCHINESE%20JOURNAL%20OF%20TRAUMATOLOGY%20or%20SO%3DCLINICAL%20BIOMECHANICS%20or%20SO%3DCLINICAL%20JOURNAL%20OF%20SPORT%20MEDICINE%20or%20SO%3DCLINICAL%20MEDICINE%20INSIGHTS%20ARTHRITIS%20%22AND%22%20MUSCULOSKELETAL%20DISORDERS%20or%20SO%3DCLINICAL%20ORTHOPAEDICS%20%22AND%22%20RELATED%20RESEARCH%20or%20SO%3DCLINICAL%20SPINE%20SURGERY%20or%20SO%3DCLINICS%20IN%20ORTHOPEDIC%20SURGERY%20or%20SO%3DCLINICS%20IN%20PODIATRIC%20MEDICINE%20%22AND%22%20SURGERY%20or%20SO%3DCONNECTIVE%20TISSUE%20RESEARCH%20or%20SO%3DCURRENT%20ORTHOPAEDIC%20PRACTICE%20or%20SO%3DCURRENT%20REVIEWS%20IN%20MUSCULOSKELETAL%20MEDICINE%20or%20SO%3DEFORT%20OPEN%20REVIEWS%20or%20SO%3DEUROPEAN%20CELLS%20MATERIALS%20or%20SO%3DEUROPEAN%20SPINE%20JOURNAL%20or%20SO%3DFOOT%20ANKLE%20INTERNATIONAL%20or%20SO%3DFOOT%20%22AND%22%20ANKLE%20CLINICS%20or%20SO%3DFOOT%20%22AND%22%20ANKLE%20SURGERY%20or%20SO%3DGAIT%20POSTURE%20or%20SO%3DGERIATRIC%20ORTHOPAEDIC%20SURGERY%20REHABILITATION%20or%20SO%3DGLOBAL%20SPINE%20JOURNAL%20or%20SO%3DHAND%20CLINICS%20or%20SO%3DHAND%20SURGERY%20REHABILITATION%20or%20SO%3DHIP%20INTERNATIONAL%20or%20SO%3DINDIAN%20JOURNAL%20OF%20ORTHOPAEDICS%20or%20SO%3DINJURY%20INTERNATIONAL%20JOURNAL%20OF%20THE%20CARE%20OF%20THE%20INJURED%20or%20SO%3DINTERNATIONAL%20JOURNAL%20OF%20PHYSIOTHERAPY%20or%20SO%3DINTERNATIONAL%20JOURNAL%20OF%20SURGERY%20OPEN%20or%20SO%3DINTERNATIONAL%20ORTHOPAEDICS%20or%20SO%3DISOKINETICS%20%22AND%22%20EXERCISE%20SCIENCE%20or%20SO%3DJOINT%20DISEASES%20%22AND%22%20RELATED%20SURGERY%20or%20SO%3DJOR%20SPINE%20or%20SO%3DJOURNAL%20OF%20ARTHROPLASTY%20or%20SO%3DJOURNAL%20OF%20BACK%20%22AND%22%20MUSCULOSKELETAL%20REHABILITATION%20or%20SO%3DJOURNAL%20OF%20BONE%20%22AND%22%20JOINT%20SURGERY%20AMERICAN%20VOLUME%20or%20SO%3DJOURNAL%20OF%20CHILDRENS%20ORTHOPAEDICS%20or%20SO%3DJOURNAL%20OF%20FOOT%20ANKLE%20SURGERY',
  'SO%3DJOURNAL%20OF%20FOOT%20%22AND%22%20ANKLE%20RESEARCH%20or%20SO%3DJOURNAL%20OF%20HAND%20SURGERY%20AMERICAN%20VOLUME%20or%20SO%3DJOURNAL%20OF%20HAND%20SURGERY%20EUROPEAN%20VOLUME%20or%20SO%3DJOURNAL%20OF%20HAND%20THERAPY%20or%20SO%3DJOURNAL%20OF%20HIP%20PRESERVATION%20SURGERY%20or%20SO%3DJOURNAL%20OF%20KNEE%20SURGERY%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20SPORTS%20PHYSICAL%20THERAPY%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20RESEARCH%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20SCIENCE%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20SURGERY%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20SURGERY%20%22AND%22%20RESEARCH%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20TRANSLATION%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDIC%20TRAUMA%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDICS%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDICS%20%22AND%22%20TRAUMATOLOGY%20or%20SO%3DJOURNAL%20OF%20ORTHOPAEDICS%20TRAUMA%20%22AND%22%20REHABILITATION%20or%20SO%3DJOURNAL%20OF%20OSTEOPOROSIS%20or%20SO%3DJOURNAL%20OF%20PEDIATRIC%20ORTHOPAEDICS%20or%20SO%3DJOURNAL%20OF%20PEDIATRIC%20ORTHOPAEDICS%20PART%20B%20or%20SO%3DJOURNAL%20OF%20PHYSIOTHERAPY%20or%20SO%3DJOURNAL%20OF%20PLASTIC%20SURGERY%20%22AND%22%20HAND%20SURGERY%20or%20SO%3DJOURNAL%20OF%20SHOULDER%20%22AND%22%20ELBOW%20SURGERY%20or%20SO%3DJOURNAL%20OF%20THE%20AMERICAN%20ACADEMY%20OF%20ORTHOPAEDIC%20SURGEONS%20or%20SO%3DJOURNAL%20OF%20THE%20AMERICAN%20ACADEMY%20OF%20ORTHOPAEDIC%20SURGEONS%20GLOBAL%20RESEARCH%20%22AND%22%20REVIEWS%20or%20SO%3DJOURNAL%20OF%20THE%20AMERICAN%20PODIATRIC%20MEDICAL%20ASSOCIATION%20or%20SO%3DJOURNAL%20OF%20WRIST%20SURGERY%20or%20SO%3DKNEE%20or%20SO%3DKNEE%20SURGERY%20SPORTS%20TRAUMATOLOGY%20ARTHROSCOPY%20or%20SO%3DMALAYSIAN%20ORTHOPAEDIC%20JOURNAL%20or%20SO%3DMINERVA%20ORTOPEDICA%20E%20TRAUMATOLOGICA%20or%20SO%3DMLTJ%20MUSCLES%20LIGAMENTS%20%22AND%22%20TENDONS%20JOURNAL%20or%20SO%3DOBERE%20EXTREMITAET%20SCHULTER%20ELLENBOGEN%20HAND%20UPPER%20EXTREMITY%20SHOULDER%20ELBOW%20HAND%20or%20SO%3DOPERATIVE%20ORTHOPADIE%20UND%20TRAUMATOLOGIE%20or%20SO%3DOPERATIVE%20TECHNIQUES%20IN%20ORTHOPAEDICS%20or%20SO%3DORTHOPADE%20or%20SO%3DORTHOPAEDIC%20JOURNAL%20OF%20SPORTS%20MEDICINE%20or%20SO%3DORTHOPAEDIC%20NURSING%20or%20SO%3DORTHOPAEDIC%20SURGERY%20or%20SO%3DORTHOPAEDICS%20TRAUMATOLOGY%20SURGERY%20RESEARCH%20or%20SO%3DORTHOPEDIC%20CLINICS%20OF%20NORTH%20AMERICA%20or%20SO%3DORTHOPEDIC%20RESEARCH%20%22AND%22%20REVIEWS%20or%20SO%3DORTHOPEDIC%20REVIEWS%20or%20SO%3DORTHOPEDICS%20or%20SO%3DOSTEOARTHRITIS%20%22AND%22%20CARTILAGE%20or%20SO%3DOSTEOLOGIE%20or%20SO%3DPHYSICAL%20THERAPY%20or%20SO%3DPHYSICIAN%20%22AND%22%20SPORTSMEDICINE%20or%20SO%3DPROSTHETICS%20%22AND%22%20ORTHOTICS%20INTERNATIONAL%20or%20SO%3DSICOT%20J%20or%20SO%3DSKELETAL%20RADIOLOGY%20or%20SO%3DSPINE%20or%20SO%3DSPINE%20JOURNAL%20or%20SO%3DSPORTVERLETZUNG%20SPORTSCHADEN%20or%20SO%3DSTRATEGIES%20IN%20TRAUMA%20%22AND%22%20LIMB%20RECONSTRUCTION%20or%20SO%3DTECHNIQUES%20IN%20FOOT%20%22AND%22%20ANKLE%20SURGERY%20or%20SO%3DTECHNIQUES%20IN%20ORTHOPAEDICS%20or%20SO%3DTECHNIQUES%20IN%20SHOULDER%20%22AND%22%20ELBOW%20SURGERY%20or%20SO%3DTRAVMATOLOGIYA%20I%20ORTOPEDIYA%20ROSSII%20or%20SO%3DWORLD%20JOURNAL%20OF%20ORTHOPEDICS%20or%20SO%3DZEITSCHRIFT%20FUR%20ORTHOPADIE%20UND%20UNFALLCHIRURGIE'
]
const omittedRecords = { notArticle: 0, notEnglish: 0 }

const headers = [
  'UID',
  'Article',
  'Volume',
  'Issue',
  'Pages',
  'DOI',
  'PMID',
  'Journal',
  'WoS Edition',
  'Publication Date',
  'Document Type',
  'Language',
  'Publisher',
  'Times cited',
  'Journal OA Gold',
  'Subject categories',
  'Abstract',
  'Funder',
  'Funder country',
  'Author',
  'Author affiliation',
  'Author country',
  'Corresponding author',
  'Any other author order position identification (first or last)'
]
console.log(headers.join('\t'))

let firstRecord = 1
let usrQuery = usrQueries.pop()
fetchNext()

function fetchNext () {
  fetch(
    `https://wos-api.clarivate.com/api/wos/?databaseId=WOS&usrQuery=${usrQuery}&publishTimeSpan=2011-01-01%2B2022-12-31&count=100&firstRecord=${firstRecord}`,
    { headers: { accept: 'application/json', 'X-ApiKey': apiKey } }
  )
    .then(response => response.json())
    .then(processData)
}

function processData (data) {
  const QueryResult = data.QueryResult
  if (!QueryResult) {
    throw new Error(`QueryResult is not defined: ${JSON.stringify(data)}`)
  }
  const recordsFound = data.QueryResult.RecordsFound
  const records = data.Data.Records.records.REC

  for (const record of records) {
    const documentType = record.static_data.summary.doctypes.doctype

    if (!documentType.includes('Article')) {
      omittedRecords.notArticle++
      continue
    }

    const language = record.static_data.fullrecord_metadata.normalized_languages.language.content
    if (language && !language.includes('English')) {
      omittedRecords.notEnglish++
      continue
    }

    // console.log(JSON.stringify(record, null, 4)); process.exit(0);
    const line = []

    // UID
    line.push(record.UID)

    // Article
    line.push(record.static_data.summary.titles.title.filter((titleData) => titleData.type === 'item')[0].content)

    line.push('') // Volume
    line.push('') // Issue
    line.push('') // Pages

    const identifier = record.dynamic_data.cluster_related.identifiers.identifier

    // DOI
    let doi = ''
    if (Array.isArray(identifier)) {
      const dois = identifier.filter((identifierData) => identifierData.type === 'doi')
      doi = dois.map((doiData) => doiData.value).join('; ')
    } else {
      if (identifier.type === 'doi') {
        doi = identifier.value
      }
    }
    line.push(doi)

    // PMID
    let pmid = ''
    if (Array.isArray(identifier)) {
      const pmids = identifier.filter((identifierData) => identifierData.type === 'pmid')
      pmid = pmids.map((pmidData) => pmidData.value).join('; ')
    } else {
      if (identifier.type === 'pmid') {
        pmid = identifier.value
      }
    }
    line.push(pmid)

    // Journal
    line.push(record.static_data.summary.titles.title.filter((titleData) => titleData.type === 'source')[0].content)

    // WoS Edition
    line.push(record.static_data.summary.EWUID.edition.value)

    // Publication Date
    if (record.static_data.summary.pub_info.sortdate.startsWith('2022') || record.static_data.summary.pub_info.sortdate.startsWith('2011')) {
      // Skip record. It was published outside of our date range. We ask for extra years because Clarivate API returns wrong results
      // if we only ask for the years we really want.
      continue
    }
    line.push(record.static_data.summary.pub_info.sortdate)

    // Document Type
    if (Array.isArray(documentType)) {
      line.push(documentType.join(', '))
    } else {
      line.push(documentType)
    }

    // Language
    line.push(record.static_data.fullrecord_metadata.normalized_languages.language.content)

    // Publisher
    line.push(record.static_data.summary.publishers.publisher.names.name.unified_name)

    // Times cited
    line.push(record.dynamic_data.citation_related.tc_list.silo_tc.local_count)

    // Journal OA Gold
    line.push(record.static_data.summary.pub_info.journal_oas_gold)

    // Subject categories
    line.push([...new Set(record.static_data.fullrecord_metadata.category_info.subjects.subject.map((subjectData) => subjectData.content))].join('; '))

    // Abstract
    if (record.static_data.fullrecord_metadata.abstracts) {
      line.push(record.static_data.fullrecord_metadata.abstracts.abstract.abstract_text.p)
    } else {
      line.push('')
    }

    // Funder
    const fundAck = record.static_data.fullrecord_metadata.fund_ack
    if (fundAck) {
      const grant = fundAck.grants.grant
      let agencies
      if (Array.isArray(grant)) {
        agencies = grant.flatMap((grantData) => grantData.grant_agency_names)
      } else {
        agencies = Array.isArray(grant.grant_agency_names) ? grant.grant_agency_names : [grant.grant_agency_names]
      }
      line.push(agencies.map((agencyData) => Array.isArray(agencyData) ? agencyData.map((agencyName) => agencyName.content).join('; ') : agencyData.content).join('; '))
    } else {
      line.push('')
    }

    // Funder country
    line.push('')

    // Author
    const name = record.static_data.summary.names.name
    if (Array.isArray(name)) {
      line.push(name.filter((nameData) => nameData.role === 'author').map((nameData) => nameData.display_name).join('; '))
    } else if (name.display_name) {
      line.push(name.display_name)
    } else {
      throw new Error(`No author found in data: ${JSON.stringify(name)}`)
    }

    // Author affiliation and author country
    const addressName = record.static_data.fullrecord_metadata.addresses.address_name
    let affiliations = ''
    let countries = ''
    if (addressName) {
      if (Array.isArray(addressName)) {
        const orgs = addressName
          .filter((addressData) => addressData.address_spec.organizations)
          .map((addressData) => addressData.address_spec.organizations.organization)

        affiliations = orgs.map((orgData) => {
          const preferredOrgs = orgData.filter((orgDatum) => orgDatum.pref === 'Y')
          if (preferredOrgs.length > 0) {
            return preferredOrgs.map((orgDatum) => orgDatum.content).join(', ')
          }
          return orgData.map((orgDatum) => orgDatum.content).join(', ')
        }).join('; ')

        countries = addressName.map((addressData) => addressData.address_spec.country).join('; ')
      } else {
        if (addressName.address_spec.organizations) {
          affiliations = addressName.address_spec.organizations.organization.map((organizationData) => organizationData.content).join('; ')
        }
        countries = addressName.address_spec.country || ''
      }
    }
    line.push(affiliations)
    line.push(countries)

    // Corresponding author
    line.push('')

    // Any other author order position identification (first or last)
    line.push('')

    console.log(line.join('\t'))
  }

  firstRecord = firstRecord + 100
  if (firstRecord < recordsFound) {
    // API is throttled to two requests per second, so introduce a small delay.
    setTimeout(fetchNext, 500)
  } else {
    usrQuery = usrQueries.pop()
    if (usrQuery) {
      firstRecord = 1
      setTimeout(fetchNext, 500)
    } else {
      console.log(omittedRecords)
    }
  }
}
