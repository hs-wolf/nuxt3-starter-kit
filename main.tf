# VARIABLES

variable "project_id" { type = string }

variable "project_region" { type = string }

variable "repo_owner" { type = string }

variable "repo_name" { type = string }

variable "repo_branch" { type = string }

# LOCALS

locals {
  docker_image = "${var.project_region}-docker.pkg.dev/${var.project_id}/${var.repo_name}/container"
}

# TERRAFORM

terraform {
  required_version = ">= 1.9.8"

  required_providers {
    google = {
      source = "hashicorp/google"
      version = "6.7.0"
    }
  }
}

# PROVIDERS

provider "google" {
  project = var.project_id
  region = var.project_region
}

# DATA

data "google_secret_manager_secret_version" "nuxt3-starter-kit-SUPABASE_KEY" {
  secret  = "nuxt3-starter-kit-SUPABASE_KEY"
  project = var.project_id
  version = "latest"
}

data "google_secret_manager_secret_version" "nuxt3-starter-kit-SUPABASE_URL" {
  secret  = "nuxt3-starter-kit-SUPABASE_URL"
  project = var.project_id
  version = "latest"
}

# RESOURCES

resource "google_artifact_registry_repository" "artifact_registry" {
  provider = google
  location = var.project_region
  repository_id = var.repo_name
  description = "Docker repository for Nuxt app"
  format = "DOCKER"
}

resource "google_cloud_run_service" "cloud_run" {
  name     = "${var.repo_name}-container"
  location = var.project_region

  template {
    spec {
      containers {
        image = local.docker_image
        resources {
          limits = {
            cpu    = "1"
            memory = "512Mi"
          }
        }
        env {
          name  = "SUPABASE_URL"
          value = data.google_secret_manager_secret_version.nuxt3-starter-kit-SUPABASE_KEY.secret_data
        }
        env {
          name  = "SUPABASE_KEY"
          value = data.google_secret_manager_secret_version.nuxt3-starter-kit-SUPABASE_URL.secret_data
        }
      }
    }
  }

  traffic {
    percent         = 100
    latest_revision = true
  }
}

output "cloud_run_url" {
  value = google_cloud_run_service.cloud_run.status[0].url
}
