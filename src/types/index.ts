export type UserDataProps = {
    _id: string;
    name: string;
    username: string;
    email: string;
    role: 'client' | 'freelancer';
    mode: 'public' | 'anonymous'
    phone: {
      personal?: number | null;
      other?: number | null;
    };
    address: {
      country?: string | null;
      city: ICity,
      state: IState,
      addressLine?: string | null;
      pincode?: number | null;
    };
    academic: {
      branch?: string | null;
      standard?: number | null;
      schoolOrCollegeName: ICollege;
      schoolOrCollegeAddress?: string | null;
    };
    about: {
      dateOfBirth?: string | null;
      gender?: string | null;
    };
    password?: string | null;
    salt?: string | null;
    avatar: {
      url: string;
      key: string;
    };
    details: {
      level: {
        number: number;
      };
      points: {
        number: number;
      };
      rating: {
        number: number;
        updatedAt?: Date;
      };
    };
    badges: {
      name?: string;
      url?: string;
    }[];
    documents: ISupportingDoc[]
    resetPasswordToken?: string | null;
    resetTokenExpiry?: Date | null;
    createdAt?: Date;
    updatedAt?: Date;
    access_list?: [] 
    comparePassword(candidatePassword: string): Promise<boolean>;
    getToken(): Promise<string>;
  }


export interface ICity {
    name: string,
    countryCode: string,
    stateCode: string,
    latitude: string,
    longitude: string
  }
  
  export interface IState {
    name: string,
    isoCode: string,
    countryCode: string,
    latitude: string,
    longitude: string
  }
  
  export interface ICollege {
    College_Name: string,
    State: string,
    StateCode: string,
    Stream: string,
  }
  
  
  // Supporting Document Interface
  export interface ISupportingDoc {
    fileName: string;
    fileUrl: string;
    key: string;
    fileType: string;
    fileSize: number; // in bytes
    uploadedAt: Date;
  }