const ptBR = {
  common: {
    or: 'ou',
    cancel: 'Cancelar',
    reset: 'Limpar',
    save: 'Salvar',
    search: 'Buscar',
    edit: 'Editar',
    new: 'Novo',
    export: 'Exportar para Excel',
    noDataToExport: 'Não há dados para exportar',
    import: 'Importar',
    discard: 'Descartar',
    yes: 'Sim',
    no: 'Não',
    pause: 'Pausar',
    areYouSure: 'Tem certeza?',
    view: 'Visualizar',
    destroy: 'Deletar',
    mustSelectARow: 'Selecine uma linha',
    start: 'Inicio',
    end: 'Fim',
    select: 'Selecionar',
    continue: 'Continuar',
    filters: 'Filtros',
  },

  app: {
    title: 'Aplicação',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'Customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'Customer_exportados',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer salvo com sucesso',
        },
        update: {
          success: 'Customer salvo com sucesso',
        },
        destroy: {
          success: 'Customer deletado com sucesso',
        },
        destroyAll: {
          success: 'Customer(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Customer',
        },
        fields: {
          id: 'Id',
          'fullName': 'FullName',
          'phoneNumber': 'PhoneNumber',
          'email': 'Email',
          'socialType': 'SocialType',
          'socialId': 'socialId',
          'profileImage': 'ProfileImage',
          'city': 'City',
          'currentLocation': 'CurrentLocation',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Customer',
        },
        view: {
          title: 'Visualizar Customer',
        },
        importer: {
          title: 'Importar Customers',
          fileName: 'customer_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    restaurant: {
        name: 'Restaurant',
        label: 'Restaurants',
        menu: 'Restaurants',
        exporterFileName: 'Restaurant_exportados',
        list: {
          menu: 'Restaurants',
          title: 'Restaurants',
        },
        create: {
          success: 'Restaurant salvo com sucesso',
        },
        update: {
          success: 'Restaurant salvo com sucesso',
        },
        destroy: {
          success: 'Restaurant deletado com sucesso',
        },
        destroyAll: {
          success: 'Restaurant(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Restaurant',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'status': 'Status',
          'category': 'Category',
          'city': 'City',
          'address': 'Address',
          'description': 'Description',
          'googleMap': 'GoogleMap',
          'feesRange': 'Fees',
          'fees': 'Fees',
          'maxFeesILSRange': 'MaxFeesILS',
          'maxFeesILS': 'MaxFeesILS',
          'minFeesILSRange': 'MinFeesILS',
          'minFeesILS': 'MinFeesILS',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'online': 'Online',
            'offline': 'Offline',
            'pick_up': 'Pick_up',
            'delivery': 'Delivery',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Restaurant',
        },
        view: {
          title: 'Visualizar Restaurant',
        },
        importer: {
          title: 'Importar Restaurants',
          fileName: 'restaurant_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    restaurantOwner: {
        name: 'RestaurantOwner',
        label: 'RestaurantOwners',
        menu: 'RestaurantOwners',
        exporterFileName: 'RestaurantOwner_exportados',
        list: {
          menu: 'RestaurantOwners',
          title: 'RestaurantOwners',
        },
        create: {
          success: 'RestaurantOwner salvo com sucesso',
        },
        update: {
          success: 'RestaurantOwner salvo com sucesso',
        },
        destroy: {
          success: 'RestaurantOwner deletado com sucesso',
        },
        destroyAll: {
          success: 'RestaurantOwner(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar RestaurantOwner',
        },
        fields: {
          id: 'Id',
          'resturentId': 'ResturentId',
          'username': 'Username',
          'password': 'Password',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo RestaurantOwner',
        },
        view: {
          title: 'Visualizar RestaurantOwner',
        },
        importer: {
          title: 'Importar RestaurantOwners',
          fileName: 'restaurantOwner_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    product: {
        name: 'Product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'Product_exportados',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product salvo com sucesso',
        },
        update: {
          success: 'Product salvo com sucesso',
        },
        destroy: {
          success: 'Product deletado com sucesso',
        },
        destroyAll: {
          success: 'Product(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Product',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'description': 'Description',
          'image': 'Image',
          'priceRange': 'Price',
          'price': 'Price',
          'restaurant': 'Restaurant',
          'category': 'Category',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Product',
        },
        view: {
          title: 'Visualizar Product',
        },
        importer: {
          title: 'Importar Products',
          fileName: 'product_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    driver: {
        name: 'Driver',
        label: 'Drivers',
        menu: 'Drivers',
        exporterFileName: 'Driver_exportados',
        list: {
          menu: 'Drivers',
          title: 'Drivers',
        },
        create: {
          success: 'Driver salvo com sucesso',
        },
        update: {
          success: 'Driver salvo com sucesso',
        },
        destroy: {
          success: 'Driver deletado com sucesso',
        },
        destroyAll: {
          success: 'Driver(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Driver',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'fullName': 'FullName',
          'username': 'Username',
          'password': 'Password',
          'currentLocation': 'CurrentLocation',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'online': 'Online',
            'busy': 'Busy',
            'offline': 'Offline',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Driver',
        },
        view: {
          title: 'Visualizar Driver',
        },
        importer: {
          title: 'Importar Drivers',
          fileName: 'driver_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    orders: {
        name: 'Orders',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'Orders_exportados',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Orders salvo com sucesso',
        },
        update: {
          success: 'Orders salvo com sucesso',
        },
        destroy: {
          success: 'Orders deletado com sucesso',
        },
        destroyAll: {
          success: 'Orders(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Orders',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'customer': 'Customer',
          'driver': 'Driver',
          'restaurant': 'Restaurant',
          'location': 'Location',
          'description': 'Description',
          'totalCartPriceRange': 'TotalCartPrice',
          'totalCartPrice': 'TotalCartPrice',
          'deliveryCostRange': 'DeliveryCost',
          'deliveryCost': 'DeliveryCost',
          'appCollectionRange': 'AppCollection',
          'appCollection': 'AppCollection',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'pending': 'Pending',
            'accepted_from_res': 'Accepted_from_res',
            'accepted_from_driver': 'Accepted_from_driver',
            'picked': 'Picked',
            'delivered': 'Delivered',
            'rejected': 'Rejected',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Orders',
        },
        view: {
          title: 'Visualizar Orders',
        },
        importer: {
          title: 'Importar Orders',
          fileName: 'orders_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    rating: {
        name: 'Rating',
        label: 'Ratings',
        menu: 'Ratings',
        exporterFileName: 'Rating_exportados',
        list: {
          menu: 'Ratings',
          title: 'Ratings',
        },
        create: {
          success: 'Rating salvo com sucesso',
        },
        update: {
          success: 'Rating salvo com sucesso',
        },
        destroy: {
          success: 'Rating deletado com sucesso',
        },
        destroyAll: {
          success: 'Rating(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Rating',
        },
        fields: {
          id: 'Id',
          'customer': 'Customer',
          'driver': 'Driver',
          'resturent': 'Resturent',
          'from': 'From',
          'to': 'To',
          'valueRange': 'Value',
          'value': 'Value',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Rating',
        },
        view: {
          title: 'Visualizar Rating',
        },
        importer: {
          title: 'Importar Ratings',
          fileName: 'rating_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resturentCategory: {
        name: 'ResturentCategory',
        label: 'ResturentCategories',
        menu: 'ResturentCategories',
        exporterFileName: 'ResturentCategory_exportados',
        list: {
          menu: 'ResturentCategories',
          title: 'ResturentCategories',
        },
        create: {
          success: 'ResturentCategory salvo com sucesso',
        },
        update: {
          success: 'ResturentCategory salvo com sucesso',
        },
        destroy: {
          success: 'ResturentCategory deletado com sucesso',
        },
        destroyAll: {
          success: 'ResturentCategory(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ResturentCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo ResturentCategory',
        },
        view: {
          title: 'Visualizar ResturentCategory',
        },
        importer: {
          title: 'Importar ResturentCategories',
          fileName: 'resturentCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    productCategory: {
        name: 'ProductCategory',
        label: 'ProductCategories',
        menu: 'ProductCategories',
        exporterFileName: 'ProductCategory_exportados',
        list: {
          menu: 'ProductCategories',
          title: 'ProductCategories',
        },
        create: {
          success: 'ProductCategory salvo com sucesso',
        },
        update: {
          success: 'ProductCategory salvo com sucesso',
        },
        destroy: {
          success: 'ProductCategory deletado com sucesso',
        },
        destroyAll: {
          success: 'ProductCategory(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ProductCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'resturent': 'Resturent',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo ProductCategory',
        },
        view: {
          title: 'Visualizar ProductCategory',
        },
        importer: {
          title: 'Importar ProductCategories',
          fileName: 'productCategory_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    cart: {
        name: 'Cart',
        label: 'Carts',
        menu: 'Carts',
        exporterFileName: 'Cart_exportados',
        list: {
          menu: 'Carts',
          title: 'Carts',
        },
        create: {
          success: 'Cart salvo com sucesso',
        },
        update: {
          success: 'Cart salvo com sucesso',
        },
        destroy: {
          success: 'Cart deletado com sucesso',
        },
        destroyAll: {
          success: 'Cart(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Cart',
        },
        fields: {
          id: 'Id',
          'product': 'Product',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'customer': 'Customer',
          'orders': 'Orders',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Cart',
        },
        view: {
          title: 'Visualizar Cart',
        },
        importer: {
          title: 'Importar Carts',
          fileName: 'cart_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    offersDeals: {
        name: 'OffersDeals',
        label: 'OffersDeals',
        menu: 'OffersDeals',
        exporterFileName: 'OffersDeals_exportados',
        list: {
          menu: 'OffersDeals',
          title: 'OffersDeals',
        },
        create: {
          success: 'OffersDeals salvo com sucesso',
        },
        update: {
          success: 'OffersDeals salvo com sucesso',
        },
        destroy: {
          success: 'OffersDeals deletado com sucesso',
        },
        destroyAll: {
          success: 'OffersDeals(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar OffersDeals',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'daysRange': 'Days',
          'days': 'Days',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo OffersDeals',
        },
        view: {
          title: 'Visualizar OffersDeals',
        },
        importer: {
          title: 'Importar OffersDeals',
          fileName: 'offersDeals_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    deals: {
        name: 'Deals',
        label: 'Deals',
        menu: 'Deals',
        exporterFileName: 'Deals_exportados',
        list: {
          menu: 'Deals',
          title: 'Deals',
        },
        create: {
          success: 'Deals salvo com sucesso',
        },
        update: {
          success: 'Deals salvo com sucesso',
        },
        destroy: {
          success: 'Deals deletado com sucesso',
        },
        destroyAll: {
          success: 'Deals(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar Deals',
        },
        fields: {
          id: 'Id',
          'product': 'Product',
          'resturant': 'Resturant',
          'offer': 'Offer',
          'endDateRange': 'EndDate',
          'endDate': 'EndDate',
          'costAfterDealRange': 'CostAfterDeal',
          'costAfterDeal': 'CostAfterDeal',
          'costForAppRange': 'CostForApp',
          'costForApp': 'CostForApp',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo Deals',
        },
        view: {
          title: 'Visualizar Deals',
        },
        importer: {
          title: 'Importar Deals',
          fileName: 'deals_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    offerPromotion: {
        name: 'OfferPromotion',
        label: 'OfferPromotions',
        menu: 'OfferPromotions',
        exporterFileName: 'OfferPromotion_exportados',
        list: {
          menu: 'OfferPromotions',
          title: 'OfferPromotions',
        },
        create: {
          success: 'OfferPromotion salvo com sucesso',
        },
        update: {
          success: 'OfferPromotion salvo com sucesso',
        },
        destroy: {
          success: 'OfferPromotion deletado com sucesso',
        },
        destroyAll: {
          success: 'OfferPromotion(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar OfferPromotion',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'dayRange': 'Day',
          'day': 'Day',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo OfferPromotion',
        },
        view: {
          title: 'Visualizar OfferPromotion',
        },
        importer: {
          title: 'Importar OfferPromotions',
          fileName: 'offerPromotion_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    resturantPromiton: {
        name: 'ResturantPromiton',
        label: 'ResturantPromitons',
        menu: 'ResturantPromitons',
        exporterFileName: 'ResturantPromiton_exportados',
        list: {
          menu: 'ResturantPromitons',
          title: 'ResturantPromitons',
        },
        create: {
          success: 'ResturantPromiton salvo com sucesso',
        },
        update: {
          success: 'ResturantPromiton salvo com sucesso',
        },
        destroy: {
          success: 'ResturantPromiton deletado com sucesso',
        },
        destroyAll: {
          success: 'ResturantPromiton(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar ResturantPromiton',
        },
        fields: {
          id: 'Id',
          'resturant': 'Resturant',
          'offerSelected': 'OfferSelected',
          'endDateRange': 'EndDate',
          'endDate': 'EndDate',
          'costForAppRange': 'CostForApp',
          'costForApp': 'CostForApp',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo ResturantPromiton',
        },
        view: {
          title: 'Visualizar ResturantPromiton',
        },
        importer: {
          title: 'Importar ResturantPromitons',
          fileName: 'resturantPromiton_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },

    callDriver: {
        name: 'CallDriver',
        label: 'CallDrivers',
        menu: 'CallDrivers',
        exporterFileName: 'CallDriver_exportados',
        list: {
          menu: 'CallDrivers',
          title: 'CallDrivers',
        },
        create: {
          success: 'CallDriver salvo com sucesso',
        },
        update: {
          success: 'CallDriver salvo com sucesso',
        },
        destroy: {
          success: 'CallDriver deletado com sucesso',
        },
        destroyAll: {
          success: 'CallDriver(s) deletado com sucesso',
        },
        edit: {
          title: 'Editar CallDriver',
        },
        fields: {
          id: 'Id',
          'resturant': 'Resturant',
          'status': 'Status',
          'driver': 'Driver',
          createdAt: 'Criado em',
          updatedAt: 'Atualizado em',
          createdAtRange: 'Criado em',
        },
        enumerators: {
          'status': {
            'pending': 'Pending',
            'selected_by_delivary': 'Selected_by_delivary',
          },
        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'Novo CallDriver',
        },
        view: {
          title: 'Visualizar CallDriver',
        },
        importer: {
          title: 'Importar CallDrivers',
          fileName: 'callDriver_template_importacao',
          hint:
            'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
        },
      },
  },
    
  auth: {
    tenants: 'Áreas de Trabalho',
    profile: {
      title: 'Perfil',
      success: 'Perfil atualizado com sucesso',
    },
    createAnAccount: 'Criar uma conta',
    rememberMe: 'Lembrar-me',
    forgotPassword: 'Esqueci minha senha',
    signin: 'Entrar',
    signup: 'Registrar',
    signout: 'Sair',
    alreadyHaveAnAccount: 'Já possui uma conta? Entre.',
    social: {
      errors: {
        'auth-invalid-provider':
          'Este email está registrado para outro provedor.',
        'auth-no-email': `O email associado a esta conta é privado ou não existe.`,
      },
    },
    signinWithAnotherAccount: 'Entrar com outra conta',
    emailUnverified: {
      message: `Por favor, confirme seu email em <strong>{0}</strong> para continuar.`,
      submit: `Reenviar confirmação por email`,
    },
    passwordResetEmail: {
      message: 'Enviar email de redefinição de senha',
      error: `Email não encontrado`,
    },
    emptyPermissions: {
      message: `Você ainda não possui permissões. Aguarde o administrador conceder seus privilégios.`,
    },
    passwordReset: {
      message: 'Alterar senha',
    },
    passwordChange: {
      title: 'Mudar a Senha',
      success: 'Senha alterada com sucesso',
      mustMatch: 'Senhas devem ser iguais',
    },
    emailAddressVerificationEmail: {
      error: `Email não encontrado`,
    },
    verificationEmailSuccess: `Verificação de email enviada com sucesso`,
    passwordResetEmailSuccess: `Email de redefinição de senha enviado com sucesso`,
    passwordResetSuccess: `Senha alterada com sucesso`,
    verifyEmail: {
      success: 'Email verificado com sucesso.',
      message:
        'Aguarde um momento, seu email está sendo verificado...',
    },
  },

  roles: {
    admin: {
      label: 'Administrador',
      description: 'Acesso completo a todos os recursos',
    },
    custom: {
      label: 'Perfil Customizado',
      description: 'Acesso customizado',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Nome',
      firstName: 'Nome',
      lastName: 'Sobrenome',
      status: 'Estado',
      phoneNumber: 'Telefone',
      role: 'Perfil',
      createdAt: 'Criado em',
      updatedAt: 'Atualizado em',
      roleUser: 'Perfil/Usuário',
      roles: 'Perfis',
      createdAtRange: 'Criado em',
      password: 'Senha',
      oldPassword: 'Senha Antiga',
      newPassword: 'Nova Senha',
      newPasswordConfirmation: 'Confirmação da Nova Senha',
      rememberMe: 'Lembrar-me',
    },
    status: {
      active: 'Ativo',
      invited: 'Convidado',
      'empty-permissions': 'Aguardando Permissões',
    },
    invite: 'Convidar',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} é inválido',
    },
    title: 'Usuários',
    menu: 'Usuários',
    doAddSuccess: 'Usuário(s) salvos com sucesso',
    doUpdateSuccess: 'Usuário salvo com sucesso',
    exporterFileName: 'usuarios_exportados',
    doDestroySuccess: 'Usuário deletado com sucesso',
    doDestroyAllSelectedSuccess:
      'Usuários deletado com sucesso',
    edit: {
      title: 'Editar usuário',
    },
    new: {
      title: 'Novo(s) Usuário(s)',
      titleModal: 'Novo Usuário',
      emailsHint:
        'Separe múltiplos endereços de e-mail usando a vírgula.',
    },
    view: {
      title: 'Visualizar Usuário',
      activity: 'Atividades',
    },
    importer: {
      title: 'Importar Usuários',
      fileName: 'usuarios_template_importacao',
      hint:
        'Arquivos/Imagens devem ser as URLs dos arquivos, separados por espaço. Relacionamentos devem ser os IDs separados por espaço.',
    },
    errors: {
      userAlreadyExists: 'Usuário com este email já existe',
      userNotFound: 'Usuário não encontrado',
      revokingOwnPermission: `Você não pode revogar sua própria permissão de proprietário`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Área de Trabalho',
    menu: 'Áreas de Trabalho',
    list: {
      menu: 'Áreas de Trabalho',
      title: 'Áreas de Trabalho',
    },
    create: {
      button: 'Criar Área de Trabalho',
      success: 'Área de Trabalho salva com sucesso',
    },
    update: {
      success: 'Área de Trabalho salva com sucesso',
    },
    destroy: {
      success: 'Área de Trabalho deletada com sucesso',
    },
    destroyAll: {
      success: 'Área(s) de Trabalho deletadas com sucesso',
    },
    edit: {
      title: 'Editar Área de Trabalho',
    },
    fields: {
      id: 'Id',
      name: 'Nome',
      tenantName: 'Nome da Área de Trabalho',
      tenantUrl: 'URL da Área de Trabalho',
      tenantId: 'Área de Trabalho',
      plan: 'Plano',
    },
    enumerators: {},
    new: {
      title: 'Nova Área de Trabalho',
    },
    invitation: {
      view: 'Ver Convites',
      invited: 'Convidado',
      accept: 'Aceitar Convite',
      decline: 'Recusar Convite',
      declined: 'Convite recusado com sucesso',
      acceptWrongEmail: 'Aceitar Convite Com Este Email',
    },
    select: 'Selecionar Área de Trabalho',
    url: {
      exists: 'Esta URL de área de trabalho já está em uso.',
    },
  },

  plan: {
    menu: 'Planos',
    title: 'Planos',

    free: {
      label: 'Gratuito',
      price: '$0',
    },
    growth: {
      label: 'Growth',
      price: '$10',
    },
    enterprise: {
      label: 'Enterprise',
      price: '$50',
    },

    pricingPeriod: '/mês',
    current: 'Plano Atual',
    subscribe: 'Assinar',
    manage: 'Gerenciar Assinatura',
    somethingWrong:
      'Há algo errado com sua assinatura. Por favor clique em Gerenciar Assinatura para mais informações.',
    cancelAtPeriodEnd:
      'O plano será cancelado no fim do período.',
    notPlanUser: `Esta assinatura não é controlada por você.`,
  },

  auditLog: {
    menu: 'Registros de Auditoria',
    title: 'Registros de Auditoria',
    exporterFileName: 'registros_autoria_exportados',
    entityNamesHint:
      'Separe múltiplas entidades por vírgula',
    fields: {
      id: 'Id',
      timestampRange: 'Período',
      entityName: 'Entidade',
      entityNames: 'Entidades',
      entityId: 'ID da Entidade',
      action: 'Ação',
      values: 'Valores',
      timestamp: 'Data',
      createdByEmail: 'Email do Usuário',
    },
  },
  settings: {
    title: 'Configurações',
    menu: 'Configurações',
    save: {
      success: 'Configurações salvas com sucesso.',
    },
    fields: {
      primary: 'Cor Primária',
      secondary: 'Cor Secundária',
      shade: 'Tom',
      logos: 'Logo',
      backgroundImages: 'Papel de Parede',
    },
  },
  dashboard: {
    menu: 'Inicial',
    message: `Esta página usa dados falsos apenas para fins de demonstração. Você pode editá-la em frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Dia',
      red: 'Vermelho',
      green: 'Verde',
      yellow: 'Amarelho',
      grey: 'Cinza',
      blue: 'Azul',
      orange: 'Laranja',
      months: {
        1: 'Janeiro',
        2: 'Fevereiro',
        3: 'Março',
        4: 'Abril',
        5: 'Maio',
        6: 'Junho',
        7: 'Julho',
      },
      eating: 'Comendo',
      drinking: 'Bebendo',
      sleeping: 'Dormindo',
      designing: 'Projetando',
      coding: 'Codificando',
      cycling: 'Pedalando',
      running: 'Correndo',
      customer: 'Cliente',
    },
  },
  errors: {
    backToHome: 'Voltar a página inicial',
    403: `Desculpe, você não tem acesso a esta página`,
    404: 'Desculpe, a página que você visitou não existe',
    500: 'Desculpe, o servidor está relatando um erro',
    429: 'Muitas requisições. Por favor, tente novamente mais tarde.',
    forbidden: {
      message: 'Acesso negado',
    },
    validation: {
      message: 'Ocorreu um erro',
    },
    defaultErrorMessage: 'Ops, ocorreu um erro',
  },

  preview: {
    error:
      'Desculpe, esta operação não é permitida em modo de demonstração.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} é inválido',
      required: '${path} é obrigatório',
      oneOf:
        '${path} deve ser um dos seguintes valores: ${values}',
      notOneOf:
        '${path} não deve ser um dos seguintes valores: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} deve ser um ${type}`;
      },
    },
    string: {
      length: '${path} deve possuir ${length} caracteres',
      min:
        '${path} deve possuir ao menos ${min} caracteres',
      max:
        '${path} deve possui no máximo ${max} caracteres',
      matches:
        '${path} deve respeitar o padrão: "${regex}"',
      email: '${path} deve ser um email válido',
      url: '${path} deve ser uma URL válida',
      trim:
        '${path} deve ser uma palavra sem espaços em branco',
      lowercase: '${path} deve ser minúsculo',
      uppercase: '${path} deve ser maiúsculo',
      selected: '${path} deve ser selecionado',
    },
    number: {
      min: '${path} deve ser maior ou igual a ${min}',
      max: '${path} deve ser menor ou igual a ${max}',
      lessThan: '${path} deve ser menor que ${less}',
      moreThan: '${path} deve ser maior que ${more}',
      notEqual: '${path} não deve ser igual a ${notEqual}',
      positive: '${path} deve ser um número positivo',
      negative: '${path} deve ser um número negativo',
      integer: '${path} deve ser um inteiro',
    },
    date: {
      min: '${path} deve ser posterior a ${min}',
      max: '${path} deve ser mais cedo do que ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} não pode ter atributos não especificados no formato do objeto',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} é obrigatório`
          : `'${path} deve possuir ao menos ${min} itens`,
      max: '${path} deve possuir no máximo ${max} itens',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'Você deve fazer upload de uma imagem',
    size:
      'O arquivo é muito grande. O tamanho máximo permitido é {0}',
    formats: `Formato inválido. Deve ser um destes: {0}.`,
  },
  importer: {
    line: 'Linha',
    status: 'Estado',
    pending: 'Pendente',
    imported: 'Importado',
    error: 'Erro',
    total: `{0} importado, {1} pendente e {2} com erro`,
    importedMessage: `Processados {0} de {1}.`,
    noNavigateAwayMessage:
      'Não saia desta página ou a importação será interrompida.',
    completed: {
      success:
        'Importação concluída. Todas as linhas foram importadas com sucesso.',
      someErrors:
        'O processamento foi concluído, mas algumas linhas não puderam ser importadas.',
      allErrors:
        'Importação falhou. Não há linhas válidas.',
    },
    form: {
      downloadTemplate: 'Baixe o modelo',
      hint:
        'Clique ou arraste o arquivo para esta área para continuar.',
    },
    list: {
      discardConfirm:
        'Você tem certeza? Dados não importados serão perdidos.',
    },
    errors: {
      invalidFileEmpty: 'O arquivo está vazio',
      invalidFileExcel:
        'Apenas arquivos Excel (.xlsx) são permitidos',
      invalidFileUpload:
        'Arquivo inválido. Verifique se você está usando a última versão do modelo.',
      importHashRequired: 'Hash de importação é necessário',
      importHashExistent: 'Dados já foram importados',
    },
  },

  autocomplete: {
    loading: 'Carregando...',
    noOptions: 'Não foram encontrados resultados',
  },

  imagesViewer: {
    noImage: 'Sem imagem',
  },

  table: {
    noData: 'Nenhum Registro Encontrado',
    loading: 'Carregando...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} de {2}',
    labelRowsPerPage: 'Por página:',
  },
};

export default ptBR;
