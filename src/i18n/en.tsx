const en = {
  common: {
    or: 'or',
    cancel: 'Cancel',
    reset: 'Reset',
    save: 'Save',
    search: 'Search',
    edit: 'Edit',
    new: 'New',
    export: 'Export to Excel',
    noDataToExport: 'No data to export',
    import: 'Import',
    discard: 'Discard',
    yes: 'Yes',
    no: 'No',
    pause: 'Pause',
    areYouSure: 'Are you sure?',
    view: 'View',
    destroy: 'Delete',
    mustSelectARow: 'Must select a row',
    start: 'Start',
    end: 'End',
    select: 'Select',
    continue: 'Continue',
    filters: 'Filters',
  },

  app: {
    title: 'Application',
  },

  api: {
    menu: 'API',
  },

  entities: {
    customer: {
        name: 'customer',
        label: 'Customers',
        menu: 'Customers',
        exporterFileName: 'customer_export',
        list: {
          menu: 'Customers',
          title: 'Customers',
        },
        create: {
          success: 'Customer successfully saved',
        },
        update: {
          success: 'Customer successfully saved',
        },
        destroy: {
          success: 'Customer successfully deleted',
        },
        destroyAll: {
          success: 'Customer(s) successfully deleted',
        },
        edit: {
          title: 'Edit Customer',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Customer',
        },
        view: {
          title: 'View Customer',
        },
        importer: {
          title: 'Import Customers',
          fileName: 'customer_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    restaurant: {
        name: 'restaurant',
        label: 'Restaurants',
        menu: 'Restaurants',
        exporterFileName: 'restaurant_export',
        list: {
          menu: 'Restaurants',
          title: 'Restaurants',
        },
        create: {
          success: 'Restaurant successfully saved',
        },
        update: {
          success: 'Restaurant successfully saved',
        },
        destroy: {
          success: 'Restaurant successfully deleted',
        },
        destroyAll: {
          success: 'Restaurant(s) successfully deleted',
        },
        edit: {
          title: 'Edit Restaurant',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Restaurant',
        },
        view: {
          title: 'View Restaurant',
        },
        importer: {
          title: 'Import Restaurants',
          fileName: 'restaurant_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    restaurantOwner: {
        name: 'restaurantOwner',
        label: 'RestaurantOwners',
        menu: 'RestaurantOwners',
        exporterFileName: 'restaurantOwner_export',
        list: {
          menu: 'RestaurantOwners',
          title: 'RestaurantOwners',
        },
        create: {
          success: 'RestaurantOwner successfully saved',
        },
        update: {
          success: 'RestaurantOwner successfully saved',
        },
        destroy: {
          success: 'RestaurantOwner successfully deleted',
        },
        destroyAll: {
          success: 'RestaurantOwner(s) successfully deleted',
        },
        edit: {
          title: 'Edit RestaurantOwner',
        },
        fields: {
          id: 'Id',
          'resturentId': 'ResturentId',
          'username': 'Username',
          'password': 'Password',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New RestaurantOwner',
        },
        view: {
          title: 'View RestaurantOwner',
        },
        importer: {
          title: 'Import RestaurantOwners',
          fileName: 'restaurantOwner_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    product: {
        name: 'product',
        label: 'Products',
        menu: 'Products',
        exporterFileName: 'product_export',
        list: {
          menu: 'Products',
          title: 'Products',
        },
        create: {
          success: 'Product successfully saved',
        },
        update: {
          success: 'Product successfully saved',
        },
        destroy: {
          success: 'Product successfully deleted',
        },
        destroyAll: {
          success: 'Product(s) successfully deleted',
        },
        edit: {
          title: 'Edit Product',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Product',
        },
        view: {
          title: 'View Product',
        },
        importer: {
          title: 'Import Products',
          fileName: 'product_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    driver: {
        name: 'driver',
        label: 'Drivers',
        menu: 'Drivers',
        exporterFileName: 'driver_export',
        list: {
          menu: 'Drivers',
          title: 'Drivers',
        },
        create: {
          success: 'Driver successfully saved',
        },
        update: {
          success: 'Driver successfully saved',
        },
        destroy: {
          success: 'Driver successfully deleted',
        },
        destroyAll: {
          success: 'Driver(s) successfully deleted',
        },
        edit: {
          title: 'Edit Driver',
        },
        fields: {
          id: 'Id',
          'status': 'Status',
          'fullName': 'FullName',
          'username': 'Username',
          'password': 'Password',
          'currentLocation': 'CurrentLocation',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Driver',
        },
        view: {
          title: 'View Driver',
        },
        importer: {
          title: 'Import Drivers',
          fileName: 'driver_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    orders: {
        name: 'orders',
        label: 'Orders',
        menu: 'Orders',
        exporterFileName: 'orders_export',
        list: {
          menu: 'Orders',
          title: 'Orders',
        },
        create: {
          success: 'Orders successfully saved',
        },
        update: {
          success: 'Orders successfully saved',
        },
        destroy: {
          success: 'Orders successfully deleted',
        },
        destroyAll: {
          success: 'Orders(s) successfully deleted',
        },
        edit: {
          title: 'Edit Orders',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New Orders',
        },
        view: {
          title: 'View Orders',
        },
        importer: {
          title: 'Import Orders',
          fileName: 'orders_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    rating: {
        name: 'rating',
        label: 'Ratings',
        menu: 'Ratings',
        exporterFileName: 'rating_export',
        list: {
          menu: 'Ratings',
          title: 'Ratings',
        },
        create: {
          success: 'Rating successfully saved',
        },
        update: {
          success: 'Rating successfully saved',
        },
        destroy: {
          success: 'Rating successfully deleted',
        },
        destroyAll: {
          success: 'Rating(s) successfully deleted',
        },
        edit: {
          title: 'Edit Rating',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Rating',
        },
        view: {
          title: 'View Rating',
        },
        importer: {
          title: 'Import Ratings',
          fileName: 'rating_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    resturentCategory: {
        name: 'resturentCategory',
        label: 'ResturentCategories',
        menu: 'ResturentCategories',
        exporterFileName: 'resturentCategory_export',
        list: {
          menu: 'ResturentCategories',
          title: 'ResturentCategories',
        },
        create: {
          success: 'ResturentCategory successfully saved',
        },
        update: {
          success: 'ResturentCategory successfully saved',
        },
        destroy: {
          success: 'ResturentCategory successfully deleted',
        },
        destroyAll: {
          success: 'ResturentCategory(s) successfully deleted',
        },
        edit: {
          title: 'Edit ResturentCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ResturentCategory',
        },
        view: {
          title: 'View ResturentCategory',
        },
        importer: {
          title: 'Import ResturentCategories',
          fileName: 'resturentCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    productCategory: {
        name: 'productCategory',
        label: 'ProductCategories',
        menu: 'ProductCategories',
        exporterFileName: 'productCategory_export',
        list: {
          menu: 'ProductCategories',
          title: 'ProductCategories',
        },
        create: {
          success: 'ProductCategory successfully saved',
        },
        update: {
          success: 'ProductCategory successfully saved',
        },
        destroy: {
          success: 'ProductCategory successfully deleted',
        },
        destroyAll: {
          success: 'ProductCategory(s) successfully deleted',
        },
        edit: {
          title: 'Edit ProductCategory',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'resturent': 'Resturent',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ProductCategory',
        },
        view: {
          title: 'View ProductCategory',
        },
        importer: {
          title: 'Import ProductCategories',
          fileName: 'productCategory_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    cart: {
        name: 'cart',
        label: 'Carts',
        menu: 'Carts',
        exporterFileName: 'cart_export',
        list: {
          menu: 'Carts',
          title: 'Carts',
        },
        create: {
          success: 'Cart successfully saved',
        },
        update: {
          success: 'Cart successfully saved',
        },
        destroy: {
          success: 'Cart successfully deleted',
        },
        destroyAll: {
          success: 'Cart(s) successfully deleted',
        },
        edit: {
          title: 'Edit Cart',
        },
        fields: {
          id: 'Id',
          'product': 'Product',
          'quantityRange': 'Quantity',
          'quantity': 'Quantity',
          'customer': 'Customer',
          'orders': 'Orders',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Cart',
        },
        view: {
          title: 'View Cart',
        },
        importer: {
          title: 'Import Carts',
          fileName: 'cart_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    offersDeals: {
        name: 'offersDeals',
        label: 'OffersDeals',
        menu: 'OffersDeals',
        exporterFileName: 'offersDeals_export',
        list: {
          menu: 'OffersDeals',
          title: 'OffersDeals',
        },
        create: {
          success: 'OffersDeals successfully saved',
        },
        update: {
          success: 'OffersDeals successfully saved',
        },
        destroy: {
          success: 'OffersDeals successfully deleted',
        },
        destroyAll: {
          success: 'OffersDeals(s) successfully deleted',
        },
        edit: {
          title: 'Edit OffersDeals',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          'daysRange': 'Days',
          'days': 'Days',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New OffersDeals',
        },
        view: {
          title: 'View OffersDeals',
        },
        importer: {
          title: 'Import OffersDeals',
          fileName: 'offersDeals_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    deals: {
        name: 'deals',
        label: 'Deals',
        menu: 'Deals',
        exporterFileName: 'deals_export',
        list: {
          menu: 'Deals',
          title: 'Deals',
        },
        create: {
          success: 'Deals successfully saved',
        },
        update: {
          success: 'Deals successfully saved',
        },
        destroy: {
          success: 'Deals successfully deleted',
        },
        destroyAll: {
          success: 'Deals(s) successfully deleted',
        },
        edit: {
          title: 'Edit Deals',
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
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New Deals',
        },
        view: {
          title: 'View Deals',
        },
        importer: {
          title: 'Import Deals',
          fileName: 'deals_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    offerPromotion: {
        name: 'offerPromotion',
        label: 'OfferPromotions',
        menu: 'OfferPromotions',
        exporterFileName: 'offerPromotion_export',
        list: {
          menu: 'OfferPromotions',
          title: 'OfferPromotions',
        },
        create: {
          success: 'OfferPromotion successfully saved',
        },
        update: {
          success: 'OfferPromotion successfully saved',
        },
        destroy: {
          success: 'OfferPromotion successfully deleted',
        },
        destroyAll: {
          success: 'OfferPromotion(s) successfully deleted',
        },
        edit: {
          title: 'Edit OfferPromotion',
        },
        fields: {
          id: 'Id',
          'title': 'Title',
          'dayRange': 'Day',
          'day': 'Day',
          'costRange': 'Cost',
          'cost': 'Cost',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New OfferPromotion',
        },
        view: {
          title: 'View OfferPromotion',
        },
        importer: {
          title: 'Import OfferPromotions',
          fileName: 'offerPromotion_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    resturantPromiton: {
        name: 'resturantPromiton',
        label: 'ResturantPromitons',
        menu: 'ResturantPromitons',
        exporterFileName: 'resturantPromiton_export',
        list: {
          menu: 'ResturantPromitons',
          title: 'ResturantPromitons',
        },
        create: {
          success: 'ResturantPromiton successfully saved',
        },
        update: {
          success: 'ResturantPromiton successfully saved',
        },
        destroy: {
          success: 'ResturantPromiton successfully deleted',
        },
        destroyAll: {
          success: 'ResturantPromiton(s) successfully deleted',
        },
        edit: {
          title: 'Edit ResturantPromiton',
        },
        fields: {
          id: 'Id',
          'resturant': 'Resturant',
          'offerSelected': 'OfferSelected',
          'endDateRange': 'EndDate',
          'endDate': 'EndDate',
          'costForAppRange': 'CostForApp',
          'costForApp': 'CostForApp',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New ResturantPromiton',
        },
        view: {
          title: 'View ResturantPromiton',
        },
        importer: {
          title: 'Import ResturantPromitons',
          fileName: 'resturantPromiton_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    callDriver: {
        name: 'callDriver',
        label: 'CallDrivers',
        menu: 'CallDrivers',
        exporterFileName: 'callDriver_export',
        list: {
          menu: 'CallDrivers',
          title: 'CallDrivers',
        },
        create: {
          success: 'CallDriver successfully saved',
        },
        update: {
          success: 'CallDriver successfully saved',
        },
        destroy: {
          success: 'CallDriver successfully deleted',
        },
        destroyAll: {
          success: 'CallDriver(s) successfully deleted',
        },
        edit: {
          title: 'Edit CallDriver',
        },
        fields: {
          id: 'Id',
          'resturant': 'Resturant',
          'status': 'Status',
          'driver': 'Driver',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
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
          title: 'New CallDriver',
        },
        view: {
          title: 'View CallDriver',
        },
        importer: {
          title: 'Import CallDrivers',
          fileName: 'callDriver_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },

    city: {
        name: 'city',
        label: 'Cities',
        menu: 'Cities',
        exporterFileName: 'city_export',
        list: {
          menu: 'Cities',
          title: 'Cities',
        },
        create: {
          success: 'City successfully saved',
        },
        update: {
          success: 'City successfully saved',
        },
        destroy: {
          success: 'City successfully deleted',
        },
        destroyAll: {
          success: 'City(s) successfully deleted',
        },
        edit: {
          title: 'Edit City',
        },
        fields: {
          id: 'Id',
          'name': 'Name',
          createdAt: 'Created at',
          updatedAt: 'Updated at',
          createdAtRange: 'Created at',
        },
        enumerators: {

        },
        placeholders: {

        },
        hints: {

        },
        new: {
          title: 'New City',
        },
        view: {
          title: 'View City',
        },
        importer: {
          title: 'Import Cities',
          fileName: 'city_import_template',
          hint:
            'Files/Images columns must be the URLs of the files separated by space.',
        },
      },
  },

  auth: {
    tenants: 'Workspaces',
    profile: {
      title: 'Profile',
      success: 'Profile successfully updated',
    },
    createAnAccount: 'Create an account',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password',
    signin: 'Sign in',
    signup: 'Sign up',
    signout: 'Sign out',
    alreadyHaveAnAccount:
      'Already have an account? Sign in.',
    social: {
      errors: {
        'auth-invalid-provider':
          'This email is already registered to another provider.',
        'auth-no-email': `The email associated with this account is private or inexistent.`,
      },
    },
    signinWithAnotherAccount:
      'Sign in with another account',
    emailUnverified: {
      message: `Please confirm your email at <strong>{0}</strong> to continue.`,
      submit: `Resend email verification`,
    },
    emptyPermissions: {
      message: `You have no permissions yet. Wait for the admin to grant you privileges.`,
    },
    passwordResetEmail: {
      message: 'Send password reset email',
      error: `Email not recognized`,
    },
    passwordReset: {
      message: 'Reset password',
    },
    passwordChange: {
      title: 'Change Password',
      success: 'Password successfully changed',
      mustMatch: 'Passwords must match',
    },
    emailAddressVerificationEmail: {
      error: `Email not recognized`,
    },
    verificationEmailSuccess: `Verification email successfully sent`,
    passwordResetEmailSuccess: `Password reset email successfully sent`,
    passwordResetSuccess: `Password successfully changed`,
    verifyEmail: {
      success: 'Email successfully verified.',
      message:
        'Just a moment, your email is being verified...',
    },
  },

  roles: {
    admin: {
      label: 'Admin',
      description: 'Full access to all resources',
    },
    custom: {
      label: 'Custom Role',
      description: 'Custom role access',
    },
  },

  user: {
    fields: {
      id: 'Id',
      avatars: 'Avatar',
      email: 'Email',
      emails: 'Email(s)',
      fullName: 'Name',
      firstName: 'First Name',
      lastName: 'Last Name',
      status: 'Status',
      phoneNumber: 'Phone Number',
      role: 'Role',
      createdAt: 'Created at',
      updatedAt: 'Updated at',
      roleUser: 'Role/User',
      roles: 'Roles',
      createdAtRange: 'Created at',
      password: 'Password',
      oldPassword: 'Old Password',
      newPassword: 'New Password',
      newPasswordConfirmation: 'New Password Confirmation',
      rememberMe: 'Remember me',
    },
    status: {
      active: 'Active',
      invited: 'Invited',
      'empty-permissions': 'Waiting for Permissions',
    },
    invite: 'Invite',
    validations: {
      // eslint-disable-next-line
      email: 'Email ${value} is invalid',
    },
    title: 'Users',
    menu: 'Users',
    doAddSuccess: 'User(s) successfully saved',
    doUpdateSuccess: 'User successfully saved',
    exporterFileName: 'users_export',
    doDestroySuccess: 'User successfully deleted',
    doDestroyAllSelectedSuccess:
      'Users successfully deleted',
    edit: {
      title: 'Edit User',
    },
    new: {
      title: 'Invite User(s)',
      titleModal: 'Invite User',
      emailsHint:
        'Separate multiple email addresses using the comma character.',
    },
    view: {
      title: 'View User',
      activity: 'Activity',
    },
    importer: {
      title: 'Import Users',
      fileName: 'users_import_template',
      hint:
        'Files/Images columns must be the URLs of the files separated by space. Relationships must be the ID of the referenced records separated by space. Roles must be the role ids separated by space.',
    },
    errors: {
      userAlreadyExists:
        'User with this email already exists',
      userNotFound: 'User not found',
      revokingOwnPermission: `You can't revoke your own admin permission`,
    },
  },

  tenant: {
    name: 'tenant',
    label: 'Workspaces',
    menu: 'Workspaces',
    list: {
      menu: 'Workspaces',
      title: 'Workspaces',
    },
    create: {
      button: 'Create Workspace',
      success: 'Workspace successfully saved',
    },
    update: {
      success: 'Workspace successfully saved',
    },
    destroy: {
      success: 'Workspace successfully deleted',
    },
    destroyAll: {
      success: 'Workspace(s) successfully deleted',
    },
    edit: {
      title: 'Edit Workspace',
    },
    fields: {
      id: 'Id',
      name: 'Name',
      url: 'URL',
      tenantName: 'Workspace Name',
      tenantId: 'Workspace',
      tenantUrl: 'Workspace URL',
      plan: 'Plan',
    },
    enumerators: {},
    new: {
      title: 'New Workspace',
    },
    invitation: {
      view: 'View Invitations',
      invited: 'Invited',
      accept: 'Accept Invitation',
      decline: 'Decline Invitation',
      declined: 'Invitation successfully declined',
      acceptWrongEmail: 'Accept Invitation With This Email',
    },
    select: 'Select Workspace',
    validation: {
      url:
        'Your workspace URL can only contain lowercase letters, numbers and dashes (and must start with a letter or number).',
    },
  },

  plan: {
    menu: 'Plans',
    title: 'Plans',

    free: {
      label: 'Free',
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

    pricingPeriod: '/month',
    current: 'Current Plan',
    subscribe: 'Subscribe',
    manage: 'Manage Subscription',
    cancelAtPeriodEnd:
      'This plan will be canceled at the end of the period.',
    somethingWrong:
      'There is something wrong with your subscription. Please go to manage subscription for more details.',
    notPlanUser: `You are not the manager of this subscription.`,
  },

  auditLog: {
    menu: 'Audit Logs',
    title: 'Audit Logs',
    exporterFileName: 'audit_log_export',
    entityNamesHint:
      'Separate multiple entities using the comma character.',
    fields: {
      id: 'Id',
      timestampRange: 'Period',
      entityName: 'Entity',
      entityNames: 'Entities',
      entityId: 'Entity ID',
      action: 'Action',
      values: 'Values',
      timestamp: 'Date',
      createdByEmail: 'User Email',
    },
  },
  settings: {
    title: 'Settings',
    menu: 'Settings',
    save: {
      success:
        'Settings successfully saved. The page will reload in {0} seconds for changes to take effect.',
    },
    fields: {
      primary: 'Primary Color',
      secondary: 'Secondary Color',
      logos: 'Logo',
      backgroundImages: 'Background Images',
      shade: 'Shade',
    },
  },
  dashboard: {
    menu: 'Dashboard',
    message: `This page uses fake data for demonstration purposes only. You can edit it at frontend/view/dashboard/DashboardPage.ts.`,
    charts: {
      day: 'Day',
      red: 'Red',
      green: 'Green',
      yellow: 'Yellow',
      grey: 'Grey',
      blue: 'Blue',
      orange: 'Orange',
      months: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
      },
      eating: 'Eating',
      drinking: 'Drinking',
      sleeping: 'Sleeping',
      designing: 'Designing',
      coding: 'Coding',
      cycling: 'Cycling',
      running: 'Running',
      customer: 'Customer',
    },
  },
  errors: {
    backToHome: 'Back to home',
    403: `Sorry, you don't have access to this page`,
    404: 'Sorry, the page you visited does not exist',
    500: 'Sorry, the server is reporting an error',
    429: 'Too many requests. Please try again later.',
    forbidden: {
      message: 'Forbidden',
    },
    validation: {
      message: 'An error occurred',
    },
    defaultErrorMessage: 'Ops, an error occurred',
  },

  preview: {
    error:
      'Sorry, this operation is not allowed in preview mode.',
  },
  
  // See https://github.com/jquense/yup#using-a-custom-locale-dictionary
  /* eslint-disable */
  validation: {
    mixed: {
      default: '${path} is invalid',
      required: '${path} is required',
      oneOf:
        '${path} must be one of the following values: ${values}',
      notOneOf:
        '${path} must not be one of the following values: ${values}',
      notType: ({ path, type, value, originalValue }) => {
        return `${path} must be a ${type}`;
      },
    },
    string: {
      length:
        '${path} must be exactly ${length} characters',
      min: '${path} must be at least ${min} characters',
      max: '${path} must be at most ${max} characters',
      matches:
        '${path} must match the following: "${regex}"',
      email: '${path} must be a valid email',
      url: '${path} must be a valid URL',
      trim: '${path} must be a trimmed string',
      lowercase: '${path} must be a lowercase string',
      uppercase: '${path} must be a upper case string',
      selected: '${path} must be selected',
    },
    number: {
      min:
        '${path} must be greater than or equal to ${min}',
      max: '${path} must be less than or equal to ${max}',
      lessThan: '${path} must be less than ${less}',
      moreThan: '${path} must be greater than ${more}',
      notEqual: '${path} must be not equal to ${notEqual}',
      positive: '${path} must be a positive number',
      negative: '${path} must be a negative number',
      integer: '${path} must be an integer',
    },
    date: {
      min: '${path} field must be later than ${min}',
      max: '${path} field must be at earlier than ${max}',
    },
    boolean: {},
    object: {
      noUnknown:
        '${path} field cannot have keys not specified in the object shape',
    },
    array: {
      min: ({ min, path }) =>
        min === 1
          ? `${path} is required`
          : `${path} field must have at least ${min} items`,
      max:
        '${path} field must have less than or equal to ${max} items',
    },
  },
  /* eslint-disable */
  fileUploader: {
    upload: 'Upload',
    image: 'You must upload an image',
    size: 'File is too big. Max allowed size is {0}',
    formats: `Invalid format. Must be one of: {0}.`,
  },
  importer: {
    line: 'Line',
    status: 'Status',
    pending: 'Pending',
    imported: 'Imported',
    error: 'Error',
    total: `{0} imported, {1} pending and {2} with error`,
    importedMessage: `Processed {0} of {1}.`,
    noNavigateAwayMessage:
      'Do not navigate away from this page or import will be stopped.',
    completed: {
      success:
        'Import completed. All rows were successfully imported.',
      someErrors:
        'Processing completed, but some rows were unable to be imported.',
      allErrors: 'Import failed. There are no valid rows.',
    },
    form: {
      downloadTemplate: 'Download the template',
      hint:
        'Click or drag the file to this area to continue',
    },
    list: {
      discardConfirm:
        'Are you sure? Non-imported data will be lost.',
    },
    errors: {
      invalidFileEmpty: 'The file is empty',
      invalidFileExcel:
        'Only excel (.xlsx) files are allowed',
      invalidFileUpload:
        'Invalid file. Make sure you are using the last version of the template.',
      importHashRequired: 'Import hash is required',
      importHashExistent: 'Data has already been imported',
    },
  },

  autocomplete: {
    loading: 'Loading...',
    noOptions: 'No data found',
  },

  imagesViewer: {
    noImage: 'No image',
  },

  table: {
    noData: 'No records found',
    loading: 'Loading...',
  },

  pagination: {
    labelDisplayedRows: '{0}-{1} of {2}',
    labelRowsPerPage: 'Per page:',
  },
};

export default en;
