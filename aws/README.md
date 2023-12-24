# AWS CLI

## aws configure

Configure the CLI with a named profile.

```bash
aws configure --profile <profile_name>
```

Inputs:

- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g. `us-east-1`)
- Default output format (e.g. `None`)

## aws s3

List all S3 buckets in a named profile.

```bash
aws s3 ls --profile <profile_name>
```
