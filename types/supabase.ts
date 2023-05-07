export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      applications: {
        Row: {
          abn: string | null
          admits_to_defaults: boolean | null
          broker_company: string | null
          broker_full_name: string | null
          broker_referral: boolean | null
          business_address: string | null
          business_name: string | null
          business_nature: string | null
          collect_document: string | null
          collect_document2: string | null
          email_address: string | null
          full_name: string | null
          how_did_you_hear_about_us: string | null
          id: string
          loan_amount: number | null
          loan_purpose: string | null
          mobile_number: string | null
          second_applicant_email_address: string | null
          second_applicant_mobile_number: string | null
          second_applicant_name: string | null
          solo_applicant: boolean | null
        }
        Insert: {
          abn?: string | null
          admits_to_defaults?: boolean | null
          broker_company?: string | null
          broker_full_name?: string | null
          broker_referral?: boolean | null
          business_address?: string | null
          business_name?: string | null
          business_nature?: string | null
          collect_document?: string | null
          collect_document2?: string | null
          email_address?: string | null
          full_name?: string | null
          how_did_you_hear_about_us?: string | null
          id: string
          loan_amount?: number | null
          loan_purpose?: string | null
          mobile_number?: string | null
          second_applicant_email_address?: string | null
          second_applicant_mobile_number?: string | null
          second_applicant_name?: string | null
          solo_applicant?: boolean | null
        }
        Update: {
          abn?: string | null
          admits_to_defaults?: boolean | null
          broker_company?: string | null
          broker_full_name?: string | null
          broker_referral?: boolean | null
          business_address?: string | null
          business_name?: string | null
          business_nature?: string | null
          collect_document?: string | null
          collect_document2?: string | null
          email_address?: string | null
          full_name?: string | null
          how_did_you_hear_about_us?: string | null
          id?: string
          loan_amount?: number | null
          loan_purpose?: string | null
          mobile_number?: string | null
          second_applicant_email_address?: string | null
          second_applicant_mobile_number?: string | null
          second_applicant_name?: string | null
          solo_applicant?: boolean | null
        }
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          phone_number: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          phone_number?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          phone_number?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
