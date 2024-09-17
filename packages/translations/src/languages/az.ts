import type { DefaultTranslationsObject, Language } from '../types.js'

export const azTranslations: DefaultTranslationsObject = {
  authentication: {
    account: 'Hesab',
    accountOfCurrentUser: 'Cari istifadəçinin hesabı',
    accountVerified: 'Hesab uğurla doğrulandı.',
    alreadyActivated: 'Artıq Aktivləşdirilib',
    alreadyLoggedIn: 'Artıq daxil olunub',
    apiKey: 'API Açarı',
    authenticated: 'Doğrulandı',
    backToLogin: 'Girişə qayıt',
    beginCreateFirstUser: 'Başlamaq üçün ilk istifadəçinizi yaradın.',
    changePassword: 'Parolu dəyişdir',
    checkYourEmailForPasswordReset:
      'Parolunuzu təhlükəsiz şəkildə sıfırlamağa imkan verəcək link üçün e-poçt ünvanınızı yoxlayın.',
    confirmGeneration: 'Generasiyani təsdiqlə',
    confirmPassword: 'Şifrəni təsdiq et',
    createFirstUser: 'İlk istifadəçini yaradın',
    emailNotValid: 'Təqdim olunan e-poçt etibarlı deyil',
    emailOrUsername: 'E-poçt və ya İstifadəçi adı',
    emailSent: 'E-poçt göndərildi',
    emailVerified: 'Email uğurla təsdiqləndi.',
    enableAPIKey: 'API açarını aktivləşdir',
    failedToUnlock: 'Kilidi açmaq alınmadı',
    forceUnlock: 'Kilidi zorla aç',
    forgotPassword: 'Şifrəni unutmusan',
    forgotPasswordEmailInstructions:
      'Zəhmət olmasa, e-poçt ünvanınızı aşağıda daxil edin. Siz parolunuzu necə sıfırlamaq barədə təlimatları olan e-poçt mesajı alacaqsınız.',
    forgotPasswordQuestion: 'Şifrəni unutmusan?',
    forgotPasswordUsernameInstructions:
      'Zəhmət olmasa, aşağıda istifadəçi adınızı daxil edin. İstifadəçi adınıza uyğun e-poçt ünvanınıza əlavə proqramın sıfırlanması ilə əlaqəli təlimatlar göndəriləcək.',
    generate: 'Yarad',
    generateNewAPIKey: 'Yeni API açarı yarad',
    generatingNewAPIKeyWillInvalidate:
      'Yeni API açarının yaradılması əvvəlki açarı etibarsız edəcək. Davam etmək istədiyinizə əminsiniz?',
    lockUntil: 'Klidklə',
    logBackIn: 'Yenidən daxil ol',
    loggedIn: 'Başqa istifadəçi ilə daxil olmaq üçün əvvəlcə çıxış etməlisiniz.',
    loggedInChangePassword:
      'Parolu dəyişdirmək üçün hesabınıza get və orada şifrənizi redaktə edin.',
    loggedOutInactivity: 'Hərəkətsizlik səbəbindən sistemdən çıxmısınız.',
    loggedOutSuccessfully: 'Siz uğurla çıxış etdiniz.',
    loggingOut: 'Çıxış edilir...',
    login: 'Giriş',
    loginAttempts: 'Giriş cəhdləri',
    loginUser: 'Giriş istifadəçisi',
    loginWithAnotherUser: 'Başqa istifadəçi ilə daxil olmaq üçün əvvəlcə çıxış etməlisiniz.',
    logOut: 'Çıxış et',
    logout: 'Çıxış',
    logoutSuccessful: 'Uğurlu çıxış.',
    logoutUser: 'Sistemdən çıxış',
    newAccountCreated:
      'Sizin üçün yeni hesab yaradıldı. Zəhmət olmasa, e-poçtunuzu doğrulamaq üçün aşağıdakı linke klikləyin: <a href="{{verificationURL}}">{{verificationURL}}</a>. E-poçtunuzu doğruladıqdan sonra uğurla daxil ola bilərsiniz.',
    newAPIKeyGenerated: 'Yeni API Açarı Yaradıldı.',
    newPassword: 'Yeni şifrə',
    passed: 'Doğrulama Keçildi',
    passwordResetSuccessfully: 'Parol uğurla yenidən quruldu.',
    resetPassword: 'Şifrəni sıfırla',
    resetPasswordExpiration: 'Şifrənin müddətini sıfırla',
    resetPasswordToken: 'Şifrə Tokenini Sıfırla',
    resetYourPassword: 'Şifrənizi sıfırlayın',
    stayLoggedIn: 'Sistemdə qal',
    successfullyRegisteredFirstUser: 'İlk istifadəçiyi uğurla qeyd etdik.',
    successfullyUnlocked: 'Uğurla kilidi açıldı',
    tokenRefreshSuccessful: 'Tokenin yenilənməsi uğurlu oldu.',
    unableToVerify: 'Doğrulamaq mümkün deyil',
    username: 'İstifadəçi adı',
    usernameNotValid: 'Təqdim edilən istifadəçi adı düzgün deyil',
    verified: 'Doğrulanmış',
    verifiedSuccessfully: 'Uğurla doğrulandı',
    verify: 'Doğrula',
    verifyUser: 'İstifadəçini doğrula',
    verifyYourEmail: 'E-poçtunuzu doğrulayın',
    youAreInactive:
      'Siz bir müddətdir aktiv deyilsiniz və tezliklə öz təhlükəsizliyiniz üçün avtomatik olaraq sistemdən çıxacaqsınız. Daxil olmaq istərdinizmi?',
    youAreReceivingResetPassword:
      'Siz (və ya başqası) hesabınız üçün parolun sıfırlanmasını tələb etdiyiniz üçün bunu alırsınız. Prosesi tamamlamaq üçün zəhmət olmasa aşağıdakı linkə klikləyin:',
    youDidNotRequestPassword:
      'Əgər siz bunu tələb etməmisinizsə, lütfən, bu e-poçtu nəzərə almayın və şifrəniz dəyişilməz qalacaq.',
  },
  error: {
    accountAlreadyActivated: 'Bu hesab artıq aktivləşdirilib.',
    autosaving: 'Bu sənədin avto yadda saxlanılması zamanı problem yarandı.',
    correctInvalidFields: 'Zəhmət olmasa, yanlış sahələri düzəlt.',
    deletingFile: 'Faylın silinməsində xəta baş verdi.',
    deletingTitle:
      '{{title}} silinərkən xəta baş verdi. Zəhmət olmasa, bağlantınızı yoxlayın və yenidən cəhd edin.',
    emailOrPasswordIncorrect: 'Təqdim olunan e-poçt və ya şifrə yanlışdır.',
    followingFieldsInvalid_one: 'Aşağıdakı sahə yanlışdır:',
    followingFieldsInvalid_other: 'Aşağıdaki sahələr yanlışdır:',
    incorrectCollection: 'Yanlış Kolleksiya',
    invalidFileType: 'Yanlış fayl növü',
    invalidFileTypeValue: 'Yanlış fayl növü: {{value}}',
    loadingDocument: '{{id}} ID-li sənədin yüklənməsində problem baş verdi.',
    localesNotSaved_one: 'Aşağıdakı yerləşdirmə saxlanıla bilmədi:',
    localesNotSaved_other: 'Aşağıdakı yerləşdirmələr saxlanıla bilmədi:',
    logoutFailed: 'Çıxış uğursuz oldu.',
    missingEmail: 'E-poçt adresi çatışmır.',
    missingIDOfDocument: 'Yeniləmək üçün sənədin ID-si çatışmır.',
    missingIDOfVersion: 'Versiyanın ID-si çatışmır.',
    missingRequiredData: 'Tələb olunan məlumat çatışmır.',
    noFilesUploaded: 'Heç bir fayl yüklənilməyib.',
    noMatchedField: '"{{label}}" üçün uyğun sahə tapılmadı',
    notAllowedToAccessPage: 'Bu səhifəyə girməyə icazəniz yoxdur.',
    notAllowedToPerformAction: 'Bu əməliyyatı icra etməyə icazəniz yoxdur.',
    notFound: 'Tələb olunan resurs tapılmadı.',
    noUser: 'İstifadəçi Yoxdur',
    previewing: 'Bu sənədin ön baxışı zamanı problem yarandı.',
    problemUploadingFile: 'Faylın yüklənməsi zamanı problem yarandı.',
    tokenInvalidOrExpired: 'Token ya yanlışdır və ya müddəti bitib.',
    tokenNotProvided: 'Token təqdim edilməyib.',
    unableToDeleteCount: '{{count}} dən {{total}} {{label}} silinə bilmir.',
    unableToUpdateCount: '{{count}} dən {{total}} {{label}} yenilənə bilmir.',
    unauthorized: 'İcazəniz yoxdur, bu tələbi yerinə yetirmək üçün daxil olmalısınız.',
    unknown: 'Naməlum bir xəta baş verdi.',
    unPublishingDocument: 'Bu sənədin nəşrini ləğv etmək zamanı problem baş verdi.',
    unspecific: 'Xəta baş verdi.',
    userEmailAlreadyRegistered: 'Verilən e-poçt ünvanı ilə artıq istifadəçi qeydiyyatdan keçib.',
    userLocked: 'Bu istifadəçi çoxsaylı uğursuz giriş cəhdləri səbəbindən kilidlənib.',
    usernameAlreadyRegistered: 'Verilən istifadəçi adı ilə artıq qeydiyyatdan keçmişdir.',
    usernameOrPasswordIncorrect: 'Təqdim edilən istifadəçi adı və ya şifrə yanlışdır.',
    valueMustBeUnique: 'Dəyər təkrar olmamalıdır',
    verificationTokenInvalid: 'Doğrulama tokenı yanlışdır.',
  },
  fields: {
    addLabel: '{{label}} əlavə et',
    addLink: 'Keçid əlavə et',
    addNew: 'Yenisini əlavə et',
    addNewLabel: 'Yeni {{label}} əlavə et',
    addRelationship: 'Relationship əlavə et',
    addUpload: 'Yükləmə əlavə et',
    block: 'blok',
    blocks: 'bloklar',
    blockType: 'Blok Növü',
    chooseBetweenCustomTextOrDocument:
      "Xüsusi mətn URL'si daxil etmək və ya başqa bir sənədə keçid yaratmaq arasında seçim edin.",
    chooseDocumentToLink: 'Keçid yaratmaq üçün sənəd seçin',
    chooseFromExisting: 'Mövcuddan seçin',
    chooseLabel: '{{label}} seçin',
    collapseAll: 'Hamısını Bağla',
    customURL: 'Xüsusi URL',
    editLabelData: '{{label}} məlumatını redaktə et',
    editLink: 'Keçidi redaktə et',
    editRelationship: 'Relationship redaktə et',
    enterURL: 'URL daxil edin',
    internalLink: 'Daxili Keçid',
    itemsAndMore: '{{items}} və daha {{count}} nəfər',
    labelRelationship: '{{label}} Relationship',
    latitude: 'Enlik',
    linkedTo: '<0>{{label}}</0> ilə əlaqəli',
    linkType: 'Keçid Növü',
    longitude: 'Uzunluq',
    newLabel: 'Yeni {{label}}',
    openInNewTab: 'Yeni sekmede aç',
    passwordsDoNotMatch: 'Şifrələr uyğun gəlmir.',
    relatedDocument: 'Əlaqəli Sənəd',
    relationTo: 'Relationship',
    removeRelationship: 'Relationship sil',
    removeUpload: 'Yükləməni sil',
    saveChanges: 'Dəyişiklikləri saxla',
    searchForBlock: 'Blok üçün axtarış',
    selectExistingLabel: 'Mövcud {{label}} seçin',
    selectFieldsToEdit: 'Redaktə ediləcək sahələri seçin',
    showAll: 'Hamısını Göstər',
    swapRelationship: 'Relationship dəyiş',
    swapUpload: 'Yükləməni dəyiş',
    textToDisplay: 'Göstəriləcək mətn',
    toggleBlock: 'Bloku keç',
    uploadNewLabel: 'Yeni {{label}} yüklə',
  },
  general: {
    aboutToDelete: 'Siz {{label}} <1>{{title}}</1> silməyə hazırsınız. Eminsiniz?',
    aboutToDeleteCount_many: 'Siz {{count}} {{label}} silməyə hazırsınız.',
    aboutToDeleteCount_one: 'Siz {{count}} {{label}} silməyə hazırsınız.',
    aboutToDeleteCount_other: 'Siz {{count}} {{label}} silməyə hazırsınız.',
    addBelow: 'Aşağıya əlavə et',
    addFilter: 'Filter əlavə et',
    adminTheme: 'Admin Mövzusu',
    and: 'Və',
    applyChanges: 'Dəyişiklikləri Tətbiq Edin',
    ascending: 'Artan',
    automatic: 'Avtomatik',
    backToDashboard: 'Panelə qayıdın',
    cancel: 'Ləğv et',
    changesNotSaved:
      'Dəyişiklikləriniz saxlanılmayıb. İndi çıxsanız, dəyişikliklərinizi itirəcəksiniz.',
    clearAll: undefined,
    close: 'Bağla',
    collapse: 'Bağla',
    collections: 'Kolleksiyalar',
    columns: 'Sütunlar',
    columnToSort: 'Sıralamağa sütun',
    confirm: 'Təsdiqlə',
    confirmDeletion: 'Silməni təsdiqlə',
    confirmDuplication: 'Dublikasiyanı təsdiqlə',
    copied: 'Kopyalandı',
    copy: 'Kopyala',
    create: 'Yarat',
    created: 'Yaradıldı',
    createdAt: 'Yaradıldığı tarix',
    createNew: 'Yeni yarat',
    createNewLabel: 'Yeni {{label}} yarat',
    creating: 'Yaradılır',
    creatingNewLabel: 'Yeni {{label}} yaradılır',
    custom: 'Xüsusi',
    dark: 'Tünd',
    dashboard: 'Panel',
    delete: 'Sil',
    deletedCountSuccessfully: '{{count}} {{label}} uğurla silindi.',
    deletedSuccessfully: 'Uğurla silindi.',
    deleting: 'Silinir...',
    depth: 'Dərinlik',
    descending: 'Azalan',
    deselectAllRows: 'Bütün sıraları seçimi ləğv edin',
    document: 'Sənəd',
    documents: 'Sənədlər',
    duplicate: 'Dublikat',
    duplicateWithoutSaving: 'Dəyişiklikləri saxlamadan dublikatla',
    edit: 'Redaktə et',
    editing: 'Redaktə olunur',
    editingLabel_many: '{{count}} {{label}} redaktə olunur',
    editingLabel_one: '{{count}} {{label}} redaktə olunur',
    editingLabel_other: '{{count}} {{label}} redaktə olunur',
    editLabel: '{{label}} redaktə et',
    email: 'Elektron poçt',
    emailAddress: 'Elektron poçt ünvanı',
    enterAValue: 'Bir dəyər daxil edin',
    error: 'Xəta',
    errors: 'Xətalar',
    fallbackToDefaultLocale: 'Standart lokalə keçid',
    false: 'Yalan',
    filter: 'Filter',
    filters: 'Filtərlər',
    filterWhere: '{{label}} filtrlə',
    globals: 'Qloballar',
    language: 'Dil',
    lastModified: 'Son dəyişdirildi',
    leaveAnyway: 'Heç olmasa çıx',
    leaveWithoutSaving: 'Saxlamadan çıx',
    light: 'Açıq',
    livePreview: 'Öncədən baxış',
    loading: 'Yüklənir',
    locale: 'Lokal',
    locales: 'Dillər',
    menu: 'Menyu',
    moveDown: 'Aşağı hərəkət et',
    moveUp: 'Yuxarı hərəkət et',
    newPassword: 'Yeni şifrə',
    next: 'Növbəti',
    noFiltersSet: 'Filter təyin edilməyib',
    noLabel: '<Heç bir {{label}}>',
    none: 'Heç bir',
    noOptions: 'Heç bir seçim yoxdur',
    noResults:
      'Heç bir {{label}} tapılmadı. Ya hələ {{label}} yoxdur, ya da yuxarıda göstərdiyiniz filtrlərə uyğun gəlmir.',
    notFound: 'Tapılmadı',
    nothingFound: 'Heç nə tapılmadı',
    noValue: 'Dəyər yoxdur',
    of: 'dən',
    only: 'Yalnız',
    open: 'Aç',
    or: 'Və ya',
    order: 'Sıra',
    pageNotFound: 'Səhifə tapılmadı',
    password: 'Şifrə',
    payloadSettings: 'Payload Parametrləri',
    perPage: 'Hər səhifədə: {{limit}}',
    previous: 'Əvvəlki',
    remove: 'Sil',
    reset: 'Yenidən başlat',
    row: 'Sətir',
    rows: 'Sətirlər',
    save: 'Saxla',
    saving: 'Saxlanılır...',
    searchBy: '{{label}} ilə axtar',
    selectAll: 'Bütün {{count}} {{label}} seç',
    selectAllRows: 'Bütün sıraları seçin',
    selectedCount: '{{count}} {{label}} seçildi',
    selectValue: 'Dəyər seçin',
    showAllLabel: 'Bütün {{label}}-ı göstər',
    sorryNotFound: 'Üzr istəyirik - sizin tələbinizə uyğun heç nə yoxdur.',
    sort: 'Sırala',
    sortByLabelDirection: '{{label}} {{direction}} ilə sırala',
    stayOnThisPage: 'Bu səhifədə qal',
    submissionSuccessful: 'Təqdimat uğurlu oldu.',
    submit: 'Təqdim et',
    submitting: 'Təqdim olunur...',
    success: 'Uğur',
    successfullyCreated: '{{label}} uğurla yaradıldı.',
    successfullyDuplicated: '{{label}} uğurla dublikatlandı.',
    thisLanguage: 'Azərbaycan dili',
    titleDeleted: '{{label}} "{{title}}" uğurla silindi.',
    true: 'Doğru',
    unauthorized: 'İcazəsiz',
    unsavedChangesDuplicate:
      'Saxlanılmamış dəyişiklikləriniz var. Dublikatla davam etmək istəyirsiniz?',
    untitled: 'Başlıqsız',
    updatedAt: 'Yeniləndiyi tarix',
    updatedCountSuccessfully: '{{count}} {{label}} uğurla yeniləndi.',
    updatedSuccessfully: 'Uğurla yeniləndi.',
    updating: 'Yenilənir',
    uploading: 'Yüklənir',
    user: 'İstifadəçi',
    username: 'İstifadəçi adı',
    users: 'İstifadəçilər',
    value: 'Dəyər',
    welcome: 'Xoş gəldiniz',
  },
  operators: {
    contains: 'daxilində',
    equals: 'bərabərdir',
    exists: 'mövcuddur',
    intersects: 'kəsişir',
    isGreaterThan: 'dən böyük',
    isGreaterThanOrEqualTo: 'böyük və ya bərabər',
    isIn: 'daxildir',
    isLessThan: 'dən kiçik',
    isLessThanOrEqualTo: 'kiçik və ya bərabər',
    isLike: 'kimi',
    isNotEqualTo: 'bərabər deyil',
    isNotIn: 'daxil deyil',
    near: 'yaxın',
    within: 'daxilinde',
  },
  upload: {
    addFile: 'Fayl əlavə et',
    addFiles: 'Faylları Əlavə Edin',
    bulkUpload: 'Kütləvi Yükləmə',
    crop: 'Məhsul',
    cropToolDescription:
      'Seçilmiş sahənin köşələrini sürükləyin, yeni bir sahə çəkin və ya aşağıdakı dəyərləri düzəltin.',
    dragAndDrop: 'Faylı buraya sürükləyin və buraxın',
    dragAndDropHere: 'və ya faylı buraya sürükləyin və buraxın',
    editImage: 'Şəkili Redaktə Et',
    fileName: 'Faylın Adı',
    fileSize: 'Faylım Ölçüsü',
    filesToUpload: 'Yükləmək üçün fayllar',
    fileToUpload: 'Yükləmək üçün Fayl',
    focalPoint: 'Mərkəzi Nöqtə',
    focalPointDescription:
      'Fokus nöqtəsini birbaşa önizləməyə sürükləyin və ya aşağıdakı dəyərləri düzəltin.',
    height: 'Hündürlük',
    lessInfo: 'Daha az məlumat',
    moreInfo: 'Daha çox məlumat',
    pasteURL: 'URL yapışdır',
    previewSizes: 'Öncədən baxış ölçüləri',
    selectCollectionToBrowse: 'Gözdən keçirmək üçün bir Kolleksiya seçin',
    selectFile: 'Fayl seçin',
    setCropArea: 'Məhsul sahəsini təyin et',
    setFocalPoint: 'Fokus nöqtəsi təyin et',
    sizes: 'Ölçülər',
    sizesFor: '{{label}} üçün ölçülər',
    width: 'En',
  },
  validation: {
    emailAddress: 'Xahiş edirik doğru elektron poçt ünvanını daxil edin.',
    enterNumber: 'Xahiş edirik doğru nömrəni daxil edin.',
    fieldHasNo: 'Bu sahədə heç bir {{label}} yoxdur',
    greaterThanMax: '{{value}} icazə verilən maksimal {{label}} olan {{max}}-dən böyükdür.',
    invalidInput: 'Bu sahə yanlış daxil edilmişdir.',
    invalidSelection: 'Bu sahədə yanlış seçim edilmişdir.',
    invalidSelections: 'Bu sahədə aşağıdakı yanlış seçimlər edilmişdir:',
    lessThanMin: '{{value}} icazə verilən minimal {{label}} olan {{min}}-dən kiçikdir.',
    limitReached: 'Limitə çatdınız, yalnız {{max}} element əlavə edilə bilər.',
    longerThanMin: 'Bu dəyər {{minLength}} simvoldan uzun olmalıdır.',
    notValidDate: '"{{value}}" doğru tarix deyil.',
    required: 'Bu sahə mütləq doldurulmalıdır.',
    requiresAtLeast: 'Bu sahə ən azı {{count}} {{label}} tələb edir.',
    requiresNoMoreThan: 'Bu sahə {{count}} {{label}}-dan çox olmamalıdır.',
    requiresTwoNumbers: 'Bu sahə iki nömrə tələb edir.',
    shorterThanMax: 'Bu dəyər {{maxLength}} simvoldan qısa olmalıdır.',
    trueOrFalse: 'Bu sahə yalnız doğru və ya yanlış ola bilər.',
    username:
      'Zəhmət olmasa, etibarlı bir istifadəçi adı daxil edin. Hərflər, rəqəmlər, tire, nöqtə və alt xəttlər ola bilər.',
    validUploadID: 'Bu sahə doğru yükləmə ID-si deyil.',
  },
  version: {
    type: 'Növ',
    aboutToPublishSelection: 'Seçimdə olan bütün {{label}}-i dərc etməyə hazırsınız. Əminsiniz?',
    aboutToRestore:
      'Bu {{label}} sənədini {{versionDate}} tarixindəki vəziyyətinə bərpa etmək üzrəsiniz.',
    aboutToRestoreGlobal:
      'Qlobal {{label}}-i {{versionDate}} tarixindəki vəziyyətinə bərpa etmək üzrəsiniz.',
    aboutToRevertToPublished:
      'Bu sənədin dəyişikliklərini dərc edilmiş vəziyyətinə qaytarmağa hazırsınız. Əminsiniz?',
    aboutToUnpublish: 'Bu sənədi dərcdən çıxartmağa hazırsınız. Əminsiniz?',
    aboutToUnpublishSelection:
      'Seçimdə olan bütün {{label}}-i dərcdən çıxartmağa hazırsınız. Əminsiniz?',
    autosave: 'Avtomatik yadda saxlama',
    autosavedSuccessfully: 'Uğurla avtomatik olaraq yadda saxlandı.',
    autosavedVersion: 'Avtomatik yadda saxlanmış versiya',
    changed: 'Dəyişdirildi',
    compareVersion: 'Versiyanı müqayisə et:',
    confirmPublish: 'Dərci təsdiq edin',
    confirmRevertToSaved: 'Yadda saxlanana qayıtmağı təsdiq edin',
    confirmUnpublish: 'Dərcdən çıxartmağı təsdiq edin',
    confirmVersionRestoration: 'Versiyanın bərpasını təsdiq edin',
    currentDocumentStatus: 'Cari {{docStatus}} sənədi',
    currentDraft: 'Hazırki Layihə',
    currentPublishedVersion: 'Hazırki Nəşr Versiyası',
    draft: 'Qaralama',
    draftSavedSuccessfully: 'Qaralama uğurla yadda saxlandı.',
    lastSavedAgo: '{{distance}} əvvəl son yadda saxlanıldı',
    noFurtherVersionsFound: 'Başqa versiyalar tapılmadı',
    noRowsFound: 'Heç bir {{label}} tapılmadı',
    noRowsSelected: undefined,
    preview: 'Öncədən baxış',
    previouslyPublished: 'Daha əvvəl nəşr olunmuş',
    problemRestoringVersion: 'Bu versiyanın bərpasında problem yaşandı',
    publish: 'Dərc et',
    publishChanges: 'Dəyişiklikləri dərc et',
    published: 'Dərc edilmiş',
    publishIn: '{{locale}} dili ilə nəşr edin',
    publishing: 'Nəşr',
    restoreAsDraft: 'Qaralamalar kimi bərpa et',
    restoredSuccessfully: 'Uğurla bərpa edildi.',
    restoreThisVersion: 'Bu versiyanı bərpa et',
    restoring: 'Bərpa olunur...',
    reverting: 'Qayıdılır...',
    revertToPublished: 'Dərc edilmişə qayıt',
    saveDraft: 'Qaralamayı yadda saxla',
    selectLocales: 'Göstərmək üçün lokalları seçin',
    selectVersionToCompare: 'Müqayisə üçün bir versiya seçin',
    showingVersionsFor: 'Göstərilən versiyalar üçün:',
    showLocales: 'Lokalları göstər:',
    status: 'Status',
    unpublish: 'Dərcdən çıxart',
    unpublishing: 'Dərcdən çıxarılır...',
    version: 'Versiya',
    versionCount_many: '{{count}} versiya tapıldı',
    versionCount_none: 'Versiya tapılmadı',
    versionCount_one: '{{count}} versiya tapıldı',
    versionCount_other: '{{count}} versiya tapıldı',
    versionCreatedOn: '{{version}} tarixində yaradıldı:',
    versionID: 'Versiyanın ID-si',
    versions: 'Versiyalar',
    viewingVersion: '{{entityLabel}} {{documentTitle}} üçün versiyanı göstərir',
    viewingVersionGlobal: 'Qlobal {{entityLabel}} üçün versiyanı göstərir',
    viewingVersions: '{{entityLabel}} {{documentTitle}} üçün versiyaları göstərir',
    viewingVersionsGlobal: 'Qlobal {{entityLabel}} üçün versiyaları göstərir',
  },
}

export const az: Language = {
  dateFNSKey: 'az',
  translations: azTranslations,
}
