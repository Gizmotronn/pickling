import supabase

# Initialize Supabase client
supabase_client = supabase.create_client(
    "https://sisuhmqshynnjhbqteji.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpc3VobXFzaHlubmpoYnF0ZWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NjI1NDUsImV4cCI6MTk5ODQzODU0NX0.p6QQHYJBiEzXKgxuPDKx3b7maqrke2qCO9hshYWtAW8",
)

# Define function to create table
def create_table():
    table_name = "loan_applications"
    table_schema = {
        "id": "uuid",
        "solo_applicant": "boolean",
        "broker_referral": "boolean",
        "broker_full_name": "text",
        "broker_company": "text",
        "full_name": "text",
        "mobile_number": "text",
        "email_address": "text",
        "second_applicant_name": "text",
        "second_applicant_mobile_number": "text",
        "second_applicant_email_address": "text",
        "how_did_you_hear_about_us": "text",
        "admits_to_defaults": "boolean",
        "business_name": "text",
        "abn": "text",
        "business_nature": "text",
        "loan_purpose": "text",
        "loan_amount": "float8",
        "business_address": "text",
        "collect_document": "text",
        "collect_document2": "text"
    }
    result = supabase_client.table(table_name).create(table_schema)
    
    # Return response
    if result.get("error"):
        return f"Table creation failed with error: {result['error']}"
    else:
        return "Table created successfully."

# Example usage
create_table()
