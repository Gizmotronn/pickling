import supabase

# Initialize Supabase client
supabase_client = supabase.create_client(
    "https://sisuhmqshynnjhbqteji.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNpc3VobXFzaHlubmpoYnF0ZWppIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI4NjI1NDUsImV4cCI6MTk5ODQzODU0NX0.p6QQHYJBiEzXKgxuPDKx3b7maqrke2qCO9hshYWtAW8",
)

# Create table schema
table_name = "loan_applications"
table_schema = """
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    solo_applicant BOOLEAN,
    broker_referral BOOLEAN,
    broker_full_name TEXT,
    broker_company TEXT,
    full_name TEXT,
    mobile_number TEXT,
    email_address TEXT,
    second_applicant_name TEXT,
    second_applicant_mobile_number TEXT,
    second_applicant_email_address TEXT,
    how_did_you_hear_about_us TEXT,
    admits_to_defaults BOOLEAN,
    business_name TEXT,
    abn TEXT,
    business_nature TEXT,
    loan_purpose TEXT,
    loan_amount FLOAT8,
    business_address TEXT,
    collect_document TEXT,
    collect_document2 TEXT
"""

# Execute SQL statement to create table
query = f"CREATE TABLE {table_name} ({table_schema})"
result = supabase_client.execute(query)

# Print the result
print(result)