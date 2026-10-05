import * as S from "@distilled.cloud/core/schema";
import * as API from "@distilled.cloud/core/api";
import { type VerdaOpError, type VerdaOpContext } from "../protocol.ts";
export type { VerdaOpError, VerdaOpContext };
declare const BadRequest_base: S.Class<BadRequest, S.TaggedStruct<"BadRequest", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        BadRequestError: true;
    };
});
export declare class BadRequest extends /*@__PURE__*/ BadRequest_base {
}
declare const Conflict_base: S.Class<Conflict, S.TaggedStruct<"Conflict", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        ConflictError: true;
    };
});
export declare class Conflict extends /*@__PURE__*/ Conflict_base {
}
declare const Forbidden_base: S.Class<Forbidden, S.TaggedStruct<"Forbidden", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        AuthError: true;
    };
});
export declare class Forbidden extends /*@__PURE__*/ Forbidden_base {
}
declare const NotFound_base: S.Class<NotFound, S.TaggedStruct<"NotFound", {
    readonly code: any;
    readonly message: any;
}>, import("effect/Cause").YieldableError> & (new (...args: any[]) => {
    "@distilled.cloud/error/categories": {
        BadRequestError: true;
    };
});
export declare class NotFound extends /*@__PURE__*/ NotFound_base {
}
export interface AddClustersControllerTagRequest {
    id: string;
    key: string;
    /** Omit for a freeform tag with no value */
    value?: string;
}
export declare const AddClustersControllerTagRequest: S.Codec<AddClustersControllerTagRequest>;
export interface TagResponseDto {
    id: string;
    key: string;
    /** Empty string for a freeform tag */
    value: string;
}
export declare const TagResponseDto: S.Codec<TagResponseDto>;
export interface AddInstancesControllerTagRequest {
    instance_id: string;
    key: string;
    /** Omit for a freeform tag with no value */
    value?: string;
}
export declare const AddInstancesControllerTagRequest: S.Codec<AddInstancesControllerTagRequest>;
/** Type of the environment variable */
export type EnvVarPublicApiType = "plain" | "secret";
export declare const EnvVarPublicApiType: any;
export interface EnvVarPublicApi {
    /** Name of the environment variable */
    name: string;
    /** Value of the environment variable, or a reference to the secret */
    value_or_reference_to_secret: string;
    /** Type of the environment variable */
    type: EnvVarPublicApiType | (string & {});
}
export declare const EnvVarPublicApi: S.Codec<EnvVarPublicApi>;
/** Environment variables for the container */
export type AddPublicApiControllerEnvironmentVariablesToContainerRequestEnvList = Array<EnvVarPublicApi>;
export declare const AddPublicApiControllerEnvironmentVariablesToContainerRequestEnvList: S.Codec<AddPublicApiControllerEnvironmentVariablesToContainerRequestEnvList>;
export interface AddPublicApiControllerEnvironmentVariablesToContainerRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Container name */
    container_name: string;
    /** Environment variables for the container */
    env: AddPublicApiControllerEnvironmentVariablesToContainerRequestEnvList;
}
export declare const AddPublicApiControllerEnvironmentVariablesToContainerRequest: S.Codec<AddPublicApiControllerEnvironmentVariablesToContainerRequest>;
/** Environment variables for the container */
export type GetDeploymentEnvVariablesPublicApiResponseDtoEnvList = Array<EnvVarPublicApi>;
export declare const GetDeploymentEnvVariablesPublicApiResponseDtoEnvList: S.Codec<GetDeploymentEnvVariablesPublicApiResponseDtoEnvList>;
export interface GetDeploymentEnvVariablesPublicApiResponseDto {
    /** Container name */
    container_name: string;
    /** Environment variables for the container */
    env: GetDeploymentEnvVariablesPublicApiResponseDtoEnvList;
}
export declare const GetDeploymentEnvVariablesPublicApiResponseDto: S.Codec<GetDeploymentEnvVariablesPublicApiResponseDto>;
export type AddPublicApiControllerEnvironmentVariablesToContainerResponseBodyList = Array<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const AddPublicApiControllerEnvironmentVariablesToContainerResponseBodyList: S.Codec<AddPublicApiControllerEnvironmentVariablesToContainerResponseBodyList>;
export type AddPublicApiControllerEnvironmentVariablesToContainerResponse = AddPublicApiControllerEnvironmentVariablesToContainerResponseBodyList;
export declare const AddPublicApiControllerEnvironmentVariablesToContainerResponse: S.Codec<AddPublicApiControllerEnvironmentVariablesToContainerResponse>;
export interface SecretFilePublicApiDto {
    /** Name of the file */
    file_name: string;
    /** Base64 encoded content of the file */
    base64_content: string;
}
export declare const SecretFilePublicApiDto: S.Codec<SecretFilePublicApiDto>;
/** List of files to store in the secret */
export type AddPublicApiControllerFilesetSecretRequestFilesList = Array<SecretFilePublicApiDto>;
export declare const AddPublicApiControllerFilesetSecretRequestFilesList: S.Codec<AddPublicApiControllerFilesetSecretRequestFilesList>;
export interface AddPublicApiControllerFilesetSecretRequest {
    /** Name of the files secret */
    name: string;
    /** List of files to store in the secret */
    files: AddPublicApiControllerFilesetSecretRequestFilesList;
}
export declare const AddPublicApiControllerFilesetSecretRequest: S.Codec<AddPublicApiControllerFilesetSecretRequest>;
export interface AddPublicApiControllerFilesetSecretResponse {
}
export declare const AddPublicApiControllerFilesetSecretResponse: S.Codec<AddPublicApiControllerFilesetSecretResponse>;
/** Type of the container registry */
export type AddPublicApiControllerRegistryCredentialsRequestType = "verda" | "gcr" | "dockerhub" | "ghcr" | "aws-ecr" | "scaleway" | "custom";
export declare const AddPublicApiControllerRegistryCredentialsRequestType: any;
export interface AddPublicApiControllerRegistryCredentialsRequest {
    /** Name of the registry credential */
    name: string;
    /** Type of the container registry */
    type: AddPublicApiControllerRegistryCredentialsRequestType | (string & {});
    /** Username for the Docker Hub registry, if selected type is DockerHub */
    username?: string;
    /** Access token for the registry, if selected type is DockerHub or Github */
    access_token?: string;
    /** Service account key for the Google Cloud Registry (Google Artifact Registry), if selected type is GCR */
    service_account_key?: string;
    /** Docker config JSON for the custom registry, if selected type is Custom */
    docker_config_json?: string;
    /** Access key ID for the AWS Elastic Container Registry, if selected type is AWSECR */
    access_key_id?: string;
    /** Secret access key for the AWS Elastic Container Registry, if selected type is AWSECR */
    secret_access_key?: string;
    /** Region for the AWS Elastic Container Registry, if selected type is AWSECR */
    region?: string;
    /** Repository for the AWS Elastic Container Registry, if selected type is AWSECR */
    ecr_repo?: string;
    /** Region-specific domain, if selected type is Scaleway */
    scaleway_domain?: string;
    /** API secret key, if selected type is Scaleway */
    scaleway_uuid?: string;
}
export declare const AddPublicApiControllerRegistryCredentialsRequest: S.Codec<AddPublicApiControllerRegistryCredentialsRequest>;
export interface AddPublicApiControllerRegistryCredentialsResponse {
}
export declare const AddPublicApiControllerRegistryCredentialsResponse: S.Codec<AddPublicApiControllerRegistryCredentialsResponse>;
export interface AddPublicApiControllerSecretRequest {
    /** Name of the secret */
    name: string;
    /** Value of the secret */
    value: string;
}
export declare const AddPublicApiControllerSecretRequest: S.Codec<AddPublicApiControllerSecretRequest>;
export interface AddPublicApiControllerSecretResponse {
}
export declare const AddPublicApiControllerSecretResponse: S.Codec<AddPublicApiControllerSecretResponse>;
export interface AddScriptsControllerScriptRequest {
    /** Script name */
    name: string;
    /** Script content */
    script: string;
}
export declare const AddScriptsControllerScriptRequest: S.Codec<AddScriptsControllerScriptRequest>;
export interface AddScriptsControllerScriptResponse {
}
export declare const AddScriptsControllerScriptResponse: S.Codec<AddScriptsControllerScriptResponse>;
export interface AddSshkeysControllerKeyRequest {
    /** Name of the SSH key */
    name: string;
    /** Public SSH key */
    key: string;
}
export declare const AddSshkeysControllerKeyRequest: S.Codec<AddSshkeysControllerKeyRequest>;
export interface AddSshkeysControllerKeyResponse {
}
export declare const AddSshkeysControllerKeyResponse: S.Codec<AddSshkeysControllerKeyResponse>;
export interface AddVolumesControllerTagRequest {
    volume_id: string;
    key: string;
    /** Omit for a freeform tag with no value */
    value?: string;
}
export declare const AddVolumesControllerTagRequest: S.Codec<AddVolumesControllerTagRequest>;
export interface CheckClusterAvailabilityControllerAvailabilityRequest {
    /** The type of cluster to check */
    cluster_type: string;
    /** Check availability for a specific location code. By default, all locations are checked. */
    location_code?: string;
}
export declare const CheckClusterAvailabilityControllerAvailabilityRequest: S.Codec<CheckClusterAvailabilityControllerAvailabilityRequest>;
export type CheckClusterAvailabilityControllerAvailabilityResponse = boolean;
export declare const CheckClusterAvailabilityControllerAvailabilityResponse: S.Codec<CheckClusterAvailabilityControllerAvailabilityResponse>;
export interface CheckInstanceAvailabilityControllerAvailabilityRequest {
    /** The type of instance to check */
    instance_type: string;
    /** Deprecated camelCase alias for is_spot. */
    isSpot?: string;
    /** Deprecated camelCase alias for location_code. */
    locationCode?: string;
    /** Check spot instance availability */
    is_spot?: string;
    /** Check availability for a specific location code. If omitted, all locations are checked. */
    location_code?: string;
}
export declare const CheckInstanceAvailabilityControllerAvailabilityRequest: S.Codec<CheckInstanceAvailabilityControllerAvailabilityRequest>;
export type CheckInstanceAvailabilityControllerAvailabilityResponse = boolean;
export declare const CheckInstanceAvailabilityControllerAvailabilityResponse: S.Codec<CheckInstanceAvailabilityControllerAvailabilityResponse>;
export type PerformClusterActionPublicDtoAction = "discontinue";
export declare const PerformClusterActionPublicDtoAction: any;
export interface PerformClusterActionPublicDto {
    action: PerformClusterActionPublicDtoAction | (string & {});
    /** Cluster ID */
    id: string;
}
export declare const PerformClusterActionPublicDto: S.Codec<PerformClusterActionPublicDto>;
/** Array of cluster actions, one per each cluster */
export type ClustersControllerPerformActionsRequestActionsList = Array<PerformClusterActionPublicDto>;
export declare const ClustersControllerPerformActionsRequestActionsList: S.Codec<ClustersControllerPerformActionsRequestActionsList>;
export interface ClustersControllerPerformActionsRequest {
    /** Array of cluster actions, one per each cluster */
    actions: ClustersControllerPerformActionsRequestActionsList;
}
export declare const ClustersControllerPerformActionsRequest: S.Codec<ClustersControllerPerformActionsRequest>;
export interface ClustersControllerPerformActionsResponse {
}
export declare const ClustersControllerPerformActionsResponse: S.Codec<ClustersControllerPerformActionsResponse>;
export type ClustersControllerPerformClusterNodeActionRequestAction = "boot" | "shutdown" | "force_shutdown";
export declare const ClustersControllerPerformClusterNodeActionRequestAction: any;
export interface ClustersControllerPerformClusterNodeActionRequest {
    clusterId: string;
    nodeId: string;
    action: ClustersControllerPerformClusterNodeActionRequestAction | (string & {});
}
export declare const ClustersControllerPerformClusterNodeActionRequest: S.Codec<ClustersControllerPerformClusterNodeActionRequest>;
export interface ClustersControllerPerformClusterNodeActionResponse {
}
export declare const ClustersControllerPerformClusterNodeActionResponse: S.Codec<ClustersControllerPerformClusterNodeActionResponse>;
export interface ContainerRegistryCredentials {
    /** Credential name of the secret containing the credentials */
    name: string;
}
export declare const ContainerRegistryCredentials: S.Codec<ContainerRegistryCredentials>;
export interface ContainerRegistrySettingsPublicApiDto {
    /** Privacy mode of the container registry - is it public or private */
    is_private: boolean;
    /** Credential details for the registry if it is private. Required if privacy mode is private */
    credentials: ContainerRegistryCredentials;
}
export declare const ContainerRegistrySettingsPublicApiDto: S.Codec<ContainerRegistrySettingsPublicApiDto>;
export interface HealthcheckSettings {
    /** Is healthcheck enabled for the container. It it used to check if the container is ready to accept traffic */
    enabled: boolean;
    /** Port to be used for healthcheck */
    port: number;
    /** Path to be used for healthcheck */
    path: string;
}
export declare const HealthcheckSettings: S.Codec<HealthcheckSettings>;
/** Entrypoint command to start the container */
export type EntrypointOverridesSettingsEntrypointList = Array<string>;
export declare const EntrypointOverridesSettingsEntrypointList: S.Codec<EntrypointOverridesSettingsEntrypointList>;
/** Arguments to the entrypoint command */
export type EntrypointOverridesSettingsCmdList = Array<string>;
export declare const EntrypointOverridesSettingsCmdList: S.Codec<EntrypointOverridesSettingsCmdList>;
export interface EntrypointOverridesSettings {
    /** Is the default docker start command and arguments overridden */
    enabled: boolean;
    /** Entrypoint command to start the container */
    entrypoint?: EntrypointOverridesSettingsEntrypointList;
    /** Arguments to the entrypoint command */
    cmd?: EntrypointOverridesSettingsCmdList;
}
export declare const EntrypointOverridesSettings: S.Codec<EntrypointOverridesSettings>;
/** Environment variables for the container */
export type ContainerPublicApiDtoEnvList = Array<EnvVarPublicApi>;
export declare const ContainerPublicApiDtoEnvList: S.Codec<ContainerPublicApiDtoEnvList>;
/** Type of the volume */
export type ScratchVolumeMountDtoType = "scratch";
export declare const ScratchVolumeMountDtoType: any;
export interface ScratchVolumeMountDto {
    /** Type of the volume */
    type: ScratchVolumeMountDtoType;
    /** Path in the container where the volume will be mounted */
    mount_path: string;
}
export declare const ScratchVolumeMountDto: S.Codec<ScratchVolumeMountDto>;
/** Type of the volume */
export type SecretVolumeMountDtoType = "secret";
export declare const SecretVolumeMountDtoType: any;
export interface SecretVolumeMountDto {
    /** Type of the volume */
    type: SecretVolumeMountDtoType;
    /** Path in the container where the volume will be mounted. */
    mount_path: string;
    /** Name of the fileset secret to be mounted */
    secret_name: string;
}
export declare const SecretVolumeMountDto: S.Codec<SecretVolumeMountDto>;
/** Type of the volume */
export type SharedVolumeMountDtoType = "shared";
export declare const SharedVolumeMountDtoType: any;
export interface SharedVolumeMountDto {
    /** Type of the volume */
    type: SharedVolumeMountDtoType;
    /** Path in the container where the volume will be mounted. */
    mount_path: string;
    /** ID of the shared volume to be mounted */
    volume_id: string;
}
export declare const SharedVolumeMountDto: S.Codec<SharedVolumeMountDto>;
/** Type of the volume */
export type MemoryVolumeMountDtoType = "memory";
export declare const MemoryVolumeMountDtoType: any;
/** Size of memory volume in MiB */
export type MemoryVolumeMountDtoSizeInMb = 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
export declare const MemoryVolumeMountDtoSizeInMb: any;
export interface MemoryVolumeMountDto {
    /** Type of the volume */
    type: MemoryVolumeMountDtoType;
    /** Path in the container where the volume will be mounted. This setting is fixed for now and cannot be changed */
    mount_path: string;
    /** Size of memory volume in MiB */
    size_in_mb: MemoryVolumeMountDtoSizeInMb | (number & {});
}
export declare const MemoryVolumeMountDto: S.Codec<MemoryVolumeMountDto>;
export type ContainerPublicApiDtoVolumeMountsItem = ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto;
export declare const ContainerPublicApiDtoVolumeMountsItem: S.Codec<ContainerPublicApiDtoVolumeMountsItem>;
/** Volume mounts for the container */
export type ContainerPublicApiDtoVolumeMountsList = Array<ContainerPublicApiDtoVolumeMountsItem>;
export declare const ContainerPublicApiDtoVolumeMountsList: S.Codec<ContainerPublicApiDtoVolumeMountsList>;
export interface ContainerPublicApiDto {
    /** Image to be deployed in the container */
    image: string;
    /** Pull the image through the platform image cache. Applies only to public Docker Hub images. Has no effect for images from other registries, or when registry credentials are set. When the cache is used, registry credentials are not needed to avoid Docker Hub rate limits, because the cache pulls with a platform account. Without the cache, this does not apply. */
    should_use_cached_image?: boolean;
    /** Port to be exposed by the container */
    exposed_port: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettings;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: EntrypointOverridesSettings;
    /** Environment variables for the container */
    env?: ContainerPublicApiDtoEnvList;
    /** Volume mounts for the container */
    volume_mounts?: ContainerPublicApiDtoVolumeMountsList;
}
export declare const ContainerPublicApiDto: S.Codec<ContainerPublicApiDto>;
/** Containers to be deployed */
export type CreateDeploymentRequestContainersList = Array<ContainerPublicApiDto>;
export declare const CreateDeploymentRequestContainersList: S.Codec<CreateDeploymentRequestContainersList>;
export interface ComputeResource {
    /** Name of the compute resource */
    name: string;
    /** Number of compute units (e.g. 4 GPUs). Default is 1 */
    size: number;
}
export declare const ComputeResource: S.Codec<ComputeResource>;
export interface ScalingPolicy {
    /** Cooldown period in seconds before the deployment scales up or down */
    delay_seconds: number;
}
export declare const ScalingPolicy: S.Codec<ScalingPolicy>;
export interface QueueLoadScalingTrigger {
    /** Threshold value for queue load. Queue item to replica ratio */
    threshold: number;
}
export declare const QueueLoadScalingTrigger: S.Codec<QueueLoadScalingTrigger>;
export interface UtilizationScalingTrigger {
    /** Is the trigger enabled */
    enabled: boolean;
    /** Threshold value for utilization, in percent */
    threshold: number;
}
export declare const UtilizationScalingTrigger: S.Codec<UtilizationScalingTrigger>;
export interface ScalingTriggers {
    /** Scaling trigger based on queue load */
    queue_load: QueueLoadScalingTrigger;
    /** Scaling trigger based on CPU utilization by percentage */
    cpu_utilization?: UtilizationScalingTrigger;
    /** Scaling trigger based on GPU utilization by percentage */
    gpu_utilization?: UtilizationScalingTrigger;
}
export declare const ScalingTriggers: S.Codec<ScalingTriggers>;
export interface CreateScalingOptionsPublicApiDto {
    /** Minimum number of replicas */
    min_replica_count: number;
    /** Maximum number of replicas */
    max_replica_count: number;
    /** Policy for scaling down replicas */
    scale_down_policy: ScalingPolicy;
    /** Policy for scaling up replicas */
    scale_up_policy: ScalingPolicy;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds: number;
    /** Number of requests each replica can process concurrently. Set this number higher for LLM endpoints, and to 1 for image generation endpoints. */
    concurrent_requests_per_replica: number;
    /** Triggers for scaling up and down */
    scaling_triggers: ScalingTriggers;
}
export declare const CreateScalingOptionsPublicApiDto: S.Codec<CreateScalingOptionsPublicApiDto>;
export interface CreateDeploymentRequest {
    /** Name of the deployment. Immutable after creation */
    name: string;
    /** Container registry settings. Private registries require saving the credentials via datacrunch cloud UI */
    container_registry_settings: ContainerRegistrySettingsPublicApiDto;
    /** Containers to be deployed */
    containers: CreateDeploymentRequestContainersList;
    /** Compute settings for the deployment */
    compute: ComputeResource;
    /** Scaling settings for the deployment */
    scaling: CreateScalingOptionsPublicApiDto;
    /** Is the deployment a spot deployment */
    is_spot?: boolean;
    /** Declare the workload is a verda-io image (built by `verda-io build`). */
    is_verda_io?: boolean;
}
export declare const CreateDeploymentRequest: S.Codec<CreateDeploymentRequest>;
export interface HealthcheckSettingsPublicApiResponse {
    enabled: boolean;
    port: number | null;
    path: string | null;
}
export declare const HealthcheckSettingsPublicApiResponse: S.Codec<HealthcheckSettingsPublicApiResponse>;
export type EntrypointOverridesSettingsPublicApiResponseEntrypointList = Array<string>;
export declare const EntrypointOverridesSettingsPublicApiResponseEntrypointList: S.Codec<EntrypointOverridesSettingsPublicApiResponseEntrypointList>;
export type EntrypointOverridesSettingsPublicApiResponseCmdList = Array<string>;
export declare const EntrypointOverridesSettingsPublicApiResponseCmdList: S.Codec<EntrypointOverridesSettingsPublicApiResponseCmdList>;
export interface EntrypointOverridesSettingsPublicApiResponse {
    enabled: boolean;
    entrypoint?: EntrypointOverridesSettingsPublicApiResponseEntrypointList | null;
    cmd?: EntrypointOverridesSettingsPublicApiResponseCmdList | null;
}
export declare const EntrypointOverridesSettingsPublicApiResponse: S.Codec<EntrypointOverridesSettingsPublicApiResponse>;
/** Environment variables for the container */
export type ContainerPublicApiResponseDtoEnvList = Array<EnvVarPublicApi>;
export declare const ContainerPublicApiResponseDtoEnvList: S.Codec<ContainerPublicApiResponseDtoEnvList>;
export type ContainerPublicApiResponseDtoVolumeMountsItem = ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto;
export declare const ContainerPublicApiResponseDtoVolumeMountsItem: S.Codec<ContainerPublicApiResponseDtoVolumeMountsItem>;
/** Volume mounts for the container */
export type ContainerPublicApiResponseDtoVolumeMountsList = Array<ContainerPublicApiResponseDtoVolumeMountsItem>;
export declare const ContainerPublicApiResponseDtoVolumeMountsList: S.Codec<ContainerPublicApiResponseDtoVolumeMountsList>;
export interface ContainerPublicApiResponseDtoImage {
    image: string;
}
export declare const ContainerPublicApiResponseDtoImage: S.Codec<ContainerPublicApiResponseDtoImage>;
export interface ContainerPublicApiResponseDto {
    /** Pull the image through the platform image cache. Applies only to public Docker Hub images. Has no effect for images from other registries, or when registry credentials are set. When the cache is used, registry credentials are not needed to avoid Docker Hub rate limits, because the cache pulls with a platform account. Without the cache, this does not apply. */
    should_use_cached_image?: boolean;
    /** Port to be exposed by the container */
    exposed_port: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettingsPublicApiResponse;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: EntrypointOverridesSettingsPublicApiResponse;
    /** Environment variables for the container */
    env?: ContainerPublicApiResponseDtoEnvList;
    /** Volume mounts for the container */
    volume_mounts?: ContainerPublicApiResponseDtoVolumeMountsList;
    image: ContainerPublicApiResponseDtoImage;
    /** Container name */
    name: string;
}
export declare const ContainerPublicApiResponseDto: S.Codec<ContainerPublicApiResponseDto>;
/** Containers in the deployment */
export type DeploymentPublicApiResponseDtoContainersList = Array<ContainerPublicApiResponseDto>;
export declare const DeploymentPublicApiResponseDtoContainersList: S.Codec<DeploymentPublicApiResponseDtoContainersList>;
export interface ContainerRegistrySettingsPublicApiResponse {
    is_private: boolean;
    credentials?: ContainerRegistryCredentials;
}
export declare const ContainerRegistrySettingsPublicApiResponse: S.Codec<ContainerRegistrySettingsPublicApiResponse>;
export interface DeploymentPublicApiResponseDto {
    /** Deployment name */
    name: string;
    /** Containers in the deployment */
    containers: DeploymentPublicApiResponseDtoContainersList;
    /** The base URL of the endpoint */
    endpoint_base_url: string;
    created_at: string;
    /** Compute resource details */
    compute: ComputeResource;
    /** Container registry settings */
    container_registry_settings: ContainerRegistrySettingsPublicApiResponse;
    is_spot: boolean;
}
export declare const DeploymentPublicApiResponseDto: S.Codec<DeploymentPublicApiResponseDto>;
export interface InstanceGroupOsVolumeDto {
    /** OS volume size in GB for instances created from this group. */
    size: number;
    /** Storage type for the OS volume. Defaults to the location default. */
    type?: string;
}
export declare const InstanceGroupOsVolumeDto: S.Codec<InstanceGroupOsVolumeDto>;
/** Default SSH keys for instances created from this group. */
export type InstanceGroupTemplateDtoSshKeyIdsList = Array<string>;
export declare const InstanceGroupTemplateDtoSshKeyIdsList: S.Codec<InstanceGroupTemplateDtoSshKeyIdsList>;
export interface InstanceGroupTemplateDto {
    image: string;
    os_volume?: InstanceGroupOsVolumeDto;
    /** Default SSH keys for instances created from this group. */
    ssh_key_ids?: InstanceGroupTemplateDtoSshKeyIdsList;
    /** Default startup script for instances created from this group. */
    startup_script_id?: string;
}
export declare const InstanceGroupTemplateDto: S.Codec<InstanceGroupTemplateDto>;
export interface CreateInstanceGroupsPublicControllerRequest {
    name: string;
    description?: string;
    location_code: string;
    /** A known instance type code. Fixed for the life of the group. */
    instance_type: string;
    template: InstanceGroupTemplateDto;
}
export declare const CreateInstanceGroupsPublicControllerRequest: S.Codec<CreateInstanceGroupsPublicControllerRequest>;
export interface InstanceGroupResponseDto {
    id: string;
    project_id: string;
    name: string;
    description: string | null;
    location_code: string;
    instance_type: string;
    /** The instance template stored by the group. */
    template: unknown;
    created_at: string;
    updated_at: string;
    /** Non-null only on a tombstoned group. Public and internal reads return live groups only. */
    deleted_at: string | null;
}
export declare const InstanceGroupResponseDto: S.Codec<InstanceGroupResponseDto>;
export interface CreateScaledJobContainerRegistryCredentialsDto {
    /** Name of the secret containing the container registry credentials */
    name: string;
}
export declare const CreateScaledJobContainerRegistryCredentialsDto: S.Codec<CreateScaledJobContainerRegistryCredentialsDto>;
export interface CreateScaledJobContainerRegistrySettings {
    /** Container registry credentials used for authorized access to private container registries. Currently, credentials must be created via the DataCrunch Cloud UI. Provide the name of the created credentials here. */
    credentials?: CreateScaledJobContainerRegistryCredentialsDto;
}
export declare const CreateScaledJobContainerRegistrySettings: S.Codec<CreateScaledJobContainerRegistrySettings>;
export type CreateScaledJobContainerHealthcheckSettings = HealthcheckSettings;
export declare const CreateScaledJobContainerHealthcheckSettings: S.Codec<HealthcheckSettings, HealthcheckSettings, never, never>;
/** Entrypoint command to start the container */
export type CreateScaledJobContainerEntrypointOverridesSettingsEntrypointList = Array<string>;
export declare const CreateScaledJobContainerEntrypointOverridesSettingsEntrypointList: S.Codec<CreateScaledJobContainerEntrypointOverridesSettingsEntrypointList>;
/** Arguments to the entrypoint command */
export type CreateScaledJobContainerEntrypointOverridesSettingsCmdList = Array<string>;
export declare const CreateScaledJobContainerEntrypointOverridesSettingsCmdList: S.Codec<CreateScaledJobContainerEntrypointOverridesSettingsCmdList>;
export interface CreateScaledJobContainerEntrypointOverridesSettings {
    /** Is the default docker start command and arguments overridden */
    enabled: boolean;
    /** Entrypoint command to start the container */
    entrypoint?: CreateScaledJobContainerEntrypointOverridesSettingsEntrypointList;
    /** Arguments to the entrypoint command */
    cmd?: CreateScaledJobContainerEntrypointOverridesSettingsCmdList;
}
export declare const CreateScaledJobContainerEntrypointOverridesSettings: S.Codec<CreateScaledJobContainerEntrypointOverridesSettings>;
/** Type of the environment variable */
export type CreateScaledJobContainerEnvVarType = "plain" | "secret";
export declare const CreateScaledJobContainerEnvVarType: any;
export interface CreateScaledJobContainerEnvVar {
    /** Name of the environment variable */
    name: string;
    /** Value of the environment variable, or a reference to the secret */
    value_or_reference_to_secret: string;
    /** Type of the environment variable */
    type: CreateScaledJobContainerEnvVarType | (string & {});
}
export declare const CreateScaledJobContainerEnvVar: S.Codec<CreateScaledJobContainerEnvVar>;
/** Environment variables for the container */
export type CreateScaledJobContainerDtoEnvList = Array<CreateScaledJobContainerEnvVar>;
export declare const CreateScaledJobContainerDtoEnvList: S.Codec<CreateScaledJobContainerDtoEnvList>;
/** Type of the volume */
export type CreateScaledJobContainerVolumeMountType = "scratch" | "shared" | "secret" | "memory";
export declare const CreateScaledJobContainerVolumeMountType: any;
/** Size of volume in MiB, if volume type is "memory" */
export type CreateScaledJobContainerVolumeMountSizeInMb = 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
export declare const CreateScaledJobContainerVolumeMountSizeInMb: any;
export interface CreateScaledJobContainerVolumeMount {
    /** Type of the volume */
    type: CreateScaledJobContainerVolumeMountType | (string & {});
    /** Path in the container where the volume will be mounted */
    mount_path: string;
    /** Name of the secret to be mounted, if volume type is "secret" */
    secret_name?: string;
    /** Size of volume in MiB, if volume type is "memory" */
    size_in_mb?: CreateScaledJobContainerVolumeMountSizeInMb | (number & {});
    /** Volume id of the shared storage */
    volumeId: string;
}
export declare const CreateScaledJobContainerVolumeMount: S.Codec<CreateScaledJobContainerVolumeMount>;
/** Volume mounts for the container */
export type CreateScaledJobContainerDtoVolumeMountsList = Array<CreateScaledJobContainerVolumeMount>;
export declare const CreateScaledJobContainerDtoVolumeMountsList: S.Codec<CreateScaledJobContainerDtoVolumeMountsList>;
export interface CreateScaledJobContainerDto {
    /** Image to be deployed in the container */
    image: string;
    /** Pull the image through the platform image cache. Applies only to public Docker Hub images. Has no effect for images from other registries, or when registry credentials are set. When the cache is used, registry credentials are not needed to avoid Docker Hub rate limits, because the cache pulls with a platform account. Without the cache, this does not apply. */
    should_use_cached_image?: boolean;
    /** Port to be exposed by the container */
    exposed_port: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettings;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: CreateScaledJobContainerEntrypointOverridesSettings;
    /** Environment variables for the container */
    env?: CreateScaledJobContainerDtoEnvList;
    /** Volume mounts for the container */
    volume_mounts?: CreateScaledJobContainerDtoVolumeMountsList;
}
export declare const CreateScaledJobContainerDto: S.Codec<CreateScaledJobContainerDto>;
/** Containers to be deployed */
export type CreateScaledJobPublicApiControllerNewScaledJobRequestContainersList = Array<CreateScaledJobContainerDto>;
export declare const CreateScaledJobPublicApiControllerNewScaledJobRequestContainersList: S.Codec<CreateScaledJobPublicApiControllerNewScaledJobRequestContainersList>;
export type CreateScaledJobComputeResourceDto = ComputeResource;
export declare const CreateScaledJobComputeResourceDto: S.Codec<ComputeResource, ComputeResource, never, never>;
export interface CreateScaledJobScalingOptionsDto {
    /** Maximum number of replicas */
    max_replica_count: number;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds: number;
    /** Duration in seconds that a job may run before the system attempts to terminate it. */
    deadline_seconds: number;
}
export declare const CreateScaledJobScalingOptionsDto: S.Codec<CreateScaledJobScalingOptionsDto>;
export interface CreateScaledJobPublicApiControllerNewScaledJobRequest {
    /** Name of the job deployment. Immutable after creation */
    name: string;
    /** Container registry settings */
    container_registry_settings?: CreateScaledJobContainerRegistrySettings;
    /** Containers to be deployed */
    containers: CreateScaledJobPublicApiControllerNewScaledJobRequestContainersList;
    /** Compute settings for the job deployment */
    compute: ComputeResource;
    /** Scaling settings for the job deployment */
    scaling: CreateScaledJobScalingOptionsDto;
}
export declare const CreateScaledJobPublicApiControllerNewScaledJobRequest: S.Codec<CreateScaledJobPublicApiControllerNewScaledJobRequest>;
export interface ImageInfoResponseDto {
    /** The full image reference including registry, image name, and tag (e.g., Docker image URL) */
    image: string;
    /** The ISO 8601 timestamp indicating when the container image was last updated */
    last_updated_at?: string;
}
export declare const ImageInfoResponseDto: S.Codec<ImageInfoResponseDto>;
export type HealthcheckSettingsResponseDto = HealthcheckSettings;
export declare const HealthcheckSettingsResponseDto: S.Codec<HealthcheckSettings, HealthcheckSettings, never, never>;
/** Entrypoint command to start the container */
export type EntrypointOverridesSettingsResponseDtoEntrypointList = Array<string>;
export declare const EntrypointOverridesSettingsResponseDtoEntrypointList: S.Codec<EntrypointOverridesSettingsResponseDtoEntrypointList>;
/** Arguments to the entrypoint command */
export type EntrypointOverridesSettingsResponseDtoCmdList = Array<string>;
export declare const EntrypointOverridesSettingsResponseDtoCmdList: S.Codec<EntrypointOverridesSettingsResponseDtoCmdList>;
export interface EntrypointOverridesSettingsResponseDto {
    /** Is the default docker start command and arguments overridden */
    enabled: boolean;
    /** Entrypoint command to start the container */
    entrypoint?: EntrypointOverridesSettingsResponseDtoEntrypointList;
    /** Arguments to the entrypoint command */
    cmd?: EntrypointOverridesSettingsResponseDtoCmdList;
}
export declare const EntrypointOverridesSettingsResponseDto: S.Codec<EntrypointOverridesSettingsResponseDto>;
/** Type of the environment variable */
export type EnvVarResponseDtoType = "plain" | "secret";
export declare const EnvVarResponseDtoType: any;
export interface EnvVarResponseDto {
    /** Name of the environment variable */
    name: string;
    /** Value of the environment variable, or a reference to the secret */
    value_or_reference_to_secret: string;
    /** Type of the environment variable */
    type: EnvVarResponseDtoType;
}
export declare const EnvVarResponseDto: S.Codec<EnvVarResponseDto>;
/** Environment variables for the container */
export type ContainerResponseDtoEnvList = Array<EnvVarResponseDto>;
export declare const ContainerResponseDtoEnvList: S.Codec<ContainerResponseDtoEnvList>;
/** Type of the volume */
export type VolumeMountResponseDtoType = "scratch" | "shared" | "secret" | "memory";
export declare const VolumeMountResponseDtoType: any;
/** Size of volume in MiB, if volume type is "memory" */
export type VolumeMountResponseDtoSizeInMb = 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
export declare const VolumeMountResponseDtoSizeInMb: any;
export interface VolumeMountResponseDto {
    /** Type of the volume */
    type: VolumeMountResponseDtoType;
    /** Path in the container where the volume will be mounted */
    mount_path: string;
    /** Name of the secret to be mounted, if volume type is "secret" */
    secret_name?: string;
    /** Size of volume in MiB, if volume type is "memory" */
    size_in_mb?: VolumeMountResponseDtoSizeInMb;
    /** Volume id of the shared storage, if volume type is "shared" */
    volume_id?: string;
}
export declare const VolumeMountResponseDto: S.Codec<VolumeMountResponseDto>;
/** Volume mounts for the container */
export type ContainerResponseDtoVolumeMountsList = Array<VolumeMountResponseDto>;
export declare const ContainerResponseDtoVolumeMountsList: S.Codec<ContainerResponseDtoVolumeMountsList>;
export interface ContainerResponseDto {
    /** Container name */
    name: string;
    /** Image details */
    image: ImageInfoResponseDto;
    /** Port to be exposed by the container */
    exposed_port: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettings;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: EntrypointOverridesSettingsResponseDto;
    /** Environment variables for the container */
    env: ContainerResponseDtoEnvList;
    /** Volume mounts for the container */
    volume_mounts: ContainerResponseDtoVolumeMountsList;
    /** The image cache setting of the container. The image is pulled through the cache only when this is true, the image is from Docker Hub, and no registry credentials are set. */
    should_use_cached_image: boolean;
}
export declare const ContainerResponseDto: S.Codec<ContainerResponseDto>;
/** Containers in the job deployment */
export type ScaledJobResponseDtoContainersList = Array<ContainerResponseDto>;
export declare const ScaledJobResponseDtoContainersList: S.Codec<ScaledJobResponseDtoContainersList>;
export type ContainerRegistryCredentialsResponseDto = ContainerRegistryCredentials;
export declare const ContainerRegistryCredentialsResponseDto: S.Codec<ContainerRegistryCredentials, ContainerRegistryCredentials, never, never>;
export type ContainerRegistrySettingsResponseDto = ContainerRegistrySettingsPublicApiDto;
export declare const ContainerRegistrySettingsResponseDto: S.Codec<ContainerRegistrySettingsPublicApiDto, ContainerRegistrySettingsPublicApiDto, never, never>;
export interface ScaledJobResponseDto {
    /** Job name */
    name: string;
    /** Containers in the job deployment */
    containers: ScaledJobResponseDtoContainersList;
    /** The base URL of the endpoint */
    endpoint_base_url: string;
    created_at: string;
    /** ID of the user who created the job */
    created_by_user_id: string;
    /** Compute resource details */
    compute: ComputeResource;
    /** Container registry settings */
    container_registry_settings: ContainerRegistrySettingsPublicApiDto;
}
export declare const ScaledJobResponseDto: S.Codec<ScaledJobResponseDto>;
/** Volume type */
export type CreateVolumesControllerVolumeRequestType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const CreateVolumesControllerVolumeRequestType: any;
/** Array of instance IDs to attach the volume to */
export type CreateVolumesControllerVolumeRequestInstanceIdsList = Array<string>;
export declare const CreateVolumesControllerVolumeRequestInstanceIdsList: S.Codec<CreateVolumesControllerVolumeRequestInstanceIdsList>;
export interface TagDto {
    key: string;
    /** Omit for a freeform tag with no value */
    value?: string;
}
export declare const TagDto: S.Codec<TagDto>;
/** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
export type CreateVolumesControllerVolumeRequestTagsList = Array<TagDto>;
export declare const CreateVolumesControllerVolumeRequestTagsList: S.Codec<CreateVolumesControllerVolumeRequestTagsList>;
export interface CreateVolumesControllerVolumeRequest {
    /** Volume type */
    type: CreateVolumesControllerVolumeRequestType | (string & {});
    /** Location code */
    location_code: string;
    /** Volume size in GB */
    size: number;
    /** Instance ID to attach the volume to */
    instance_id?: string;
    /** Array of instance IDs to attach the volume to */
    instance_ids?: CreateVolumesControllerVolumeRequestInstanceIdsList;
    /** Volume name */
    name: string;
    /** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
    tags?: CreateVolumesControllerVolumeRequestTagsList;
}
export declare const CreateVolumesControllerVolumeRequest: S.Codec<CreateVolumesControllerVolumeRequest>;
export interface CreateVolumesControllerVolumeResponse {
}
export declare const CreateVolumesControllerVolumeResponse: S.Codec<CreateVolumesControllerVolumeResponse>;
export interface DeleteClustersControllerTagRequest {
    id: string;
    tagId: string;
}
export declare const DeleteClustersControllerTagRequest: S.Codec<DeleteClustersControllerTagRequest>;
export interface DeleteClustersControllerTagResponse {
}
export declare const DeleteClustersControllerTagResponse: S.Codec<DeleteClustersControllerTagResponse>;
export interface DeleteDeploymentRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Maximum time to wait for deployment deletion in milliseconds. Set to 0 to skip waiting. */
    timeout?: number;
}
export declare const DeleteDeploymentRequest: S.Codec<DeleteDeploymentRequest>;
export interface DeleteDeploymentResponse {
}
export declare const DeleteDeploymentResponse: S.Codec<DeleteDeploymentResponse>;
export interface DeleteInstancesControllerTagRequest {
    instance_id: string;
    tagId: string;
}
export declare const DeleteInstancesControllerTagRequest: S.Codec<DeleteInstancesControllerTagRequest>;
export interface DeleteInstancesControllerTagResponse {
}
export declare const DeleteInstancesControllerTagResponse: S.Codec<DeleteInstancesControllerTagResponse>;
/** List of environment variable names to delete */
export type DeletePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList = Array<string>;
export declare const DeletePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList: S.Codec<DeletePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList>;
export interface DeletePublicApiControllerEnvironmentVariablesOfContainerRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Container name */
    container_name: string;
    /** List of environment variable names to delete */
    env: DeletePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList;
}
export declare const DeletePublicApiControllerEnvironmentVariablesOfContainerRequest: S.Codec<DeletePublicApiControllerEnvironmentVariablesOfContainerRequest>;
export type DeletePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList = Array<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const DeletePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList: S.Codec<DeletePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList>;
export type DeletePublicApiControllerEnvironmentVariablesOfContainerResponse = DeletePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList;
export declare const DeletePublicApiControllerEnvironmentVariablesOfContainerResponse: S.Codec<DeletePublicApiControllerEnvironmentVariablesOfContainerResponse>;
export interface DeletePublicApiControllerFilesetSecretRequest {
    secret_name: string;
    /** Force delete the secret, even if it is used in deployments. Dangerous! may cause deployments to fail */
    force?: boolean;
}
export declare const DeletePublicApiControllerFilesetSecretRequest: S.Codec<DeletePublicApiControllerFilesetSecretRequest>;
export interface DeletePublicApiControllerFilesetSecretResponse {
}
export declare const DeletePublicApiControllerFilesetSecretResponse: S.Codec<DeletePublicApiControllerFilesetSecretResponse>;
export interface DeletePublicApiControllerRegistryCredentialsRequest {
    credentials_name: string;
    /** Force delete the registry credentials, even if it is used in deployments. Dangerous! may cause deployments to fail */
    force?: boolean;
}
export declare const DeletePublicApiControllerRegistryCredentialsRequest: S.Codec<DeletePublicApiControllerRegistryCredentialsRequest>;
export interface DeletePublicApiControllerRegistryCredentialsResponse {
}
export declare const DeletePublicApiControllerRegistryCredentialsResponse: S.Codec<DeletePublicApiControllerRegistryCredentialsResponse>;
export interface DeletePublicApiControllerSecretRequest {
    secret_name: string;
    /** Force delete the secret, even if it is used in deployments. Dangerous! may cause deployments to fail */
    force?: boolean;
}
export declare const DeletePublicApiControllerSecretRequest: S.Codec<DeletePublicApiControllerSecretRequest>;
export interface DeletePublicApiControllerSecretResponse {
}
export declare const DeletePublicApiControllerSecretResponse: S.Codec<DeletePublicApiControllerSecretResponse>;
export interface DeleteScaledJobPublicApiControllerByNameRequest {
    /** Name of the job */
    jobName: string;
    /** Maximum time to wait for job deployment deletion in milliseconds. Set to 0 to skip waiting. */
    timeout?: number;
}
export declare const DeleteScaledJobPublicApiControllerByNameRequest: S.Codec<DeleteScaledJobPublicApiControllerByNameRequest>;
export interface DeleteScaledJobPublicApiControllerByNameResponse {
}
export declare const DeleteScaledJobPublicApiControllerByNameResponse: S.Codec<DeleteScaledJobPublicApiControllerByNameResponse>;
export interface DeleteScriptsControllerKeyRequest {
    scriptId: string;
}
export declare const DeleteScriptsControllerKeyRequest: S.Codec<DeleteScriptsControllerKeyRequest>;
export interface DeleteScriptsControllerKeyResponse {
}
export declare const DeleteScriptsControllerKeyResponse: S.Codec<DeleteScriptsControllerKeyResponse>;
export type DeleteScriptsControllerScriptsRequestScriptsList = Array<string>;
export declare const DeleteScriptsControllerScriptsRequestScriptsList: S.Codec<DeleteScriptsControllerScriptsRequestScriptsList>;
export interface DeleteScriptsControllerScriptsRequest {
    scripts: DeleteScriptsControllerScriptsRequestScriptsList;
}
export declare const DeleteScriptsControllerScriptsRequest: S.Codec<DeleteScriptsControllerScriptsRequest>;
export interface DeleteScriptsControllerScriptsResponse {
}
export declare const DeleteScriptsControllerScriptsResponse: S.Codec<DeleteScriptsControllerScriptsResponse>;
export interface DeleteSshkeysControllerKeyRequest {
    sshKeyId: string;
}
export declare const DeleteSshkeysControllerKeyRequest: S.Codec<DeleteSshkeysControllerKeyRequest>;
export interface DeleteSshkeysControllerKeyResponse {
}
export declare const DeleteSshkeysControllerKeyResponse: S.Codec<DeleteSshkeysControllerKeyResponse>;
export type DeleteSshkeysControllerKeysRequestKeysList = Array<string>;
export declare const DeleteSshkeysControllerKeysRequestKeysList: S.Codec<DeleteSshkeysControllerKeysRequestKeysList>;
export interface DeleteSshkeysControllerKeysRequest {
    keys: DeleteSshkeysControllerKeysRequestKeysList;
}
export declare const DeleteSshkeysControllerKeysRequest: S.Codec<DeleteSshkeysControllerKeysRequest>;
export interface DeleteSshkeysControllerKeysResponse {
}
export declare const DeleteSshkeysControllerKeysResponse: S.Codec<DeleteSshkeysControllerKeysResponse>;
export interface DeleteVolumesControllerTagRequest {
    volume_id: string;
    tagId: string;
}
export declare const DeleteVolumesControllerTagRequest: S.Codec<DeleteVolumesControllerTagRequest>;
export interface DeleteVolumesControllerTagResponse {
}
export declare const DeleteVolumesControllerTagResponse: S.Codec<DeleteVolumesControllerTagResponse>;
export interface DeleteVolumesControllerVolumeByIdRequest {
    volume_id: string;
    /** If true, the volume will be removed permanently */
    is_permanent?: boolean;
}
export declare const DeleteVolumesControllerVolumeByIdRequest: S.Codec<DeleteVolumesControllerVolumeByIdRequest>;
export interface DeleteVolumesControllerVolumeByIdResponse {
}
export declare const DeleteVolumesControllerVolumeByIdResponse: S.Codec<DeleteVolumesControllerVolumeByIdResponse>;
export type DeployClustersControllerClusterRequestSshKeyIdsCase1List = Array<string>;
export declare const DeployClustersControllerClusterRequestSshKeyIdsCase1List: S.Codec<DeployClustersControllerClusterRequestSshKeyIdsCase1List>;
/** SSH key IDs to attach to the cluster. Required if image is an OS image type. */
export type DeployClustersControllerClusterRequestSshKeyIds = string | DeployClustersControllerClusterRequestSshKeyIdsCase1List;
export declare const DeployClustersControllerClusterRequestSshKeyIds: S.Codec<DeployClustersControllerClusterRequestSshKeyIds>;
/** Key-value tags for the new cluster. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
export type DeployClustersControllerClusterRequestTagsList = Array<TagDto>;
export declare const DeployClustersControllerClusterRequestTagsList: S.Codec<DeployClustersControllerClusterRequestTagsList>;
/** Contract type. For clusters, only PAY_AS_YOU_GO currently supported. */
export type DeployClustersControllerClusterRequestContract = "PAY_AS_YOU_GO" | "LONG_TERM";
export declare const DeployClustersControllerClusterRequestContract: any;
/** Extension settings for long-term contracts. Takes priority over auto_rental_extension and turn_to_pay_as_you_go. */
export type DeployClustersControllerClusterRequestExtensionSettings = "auto_renew" | "pay_as_you_go" | "end_contract";
export declare const DeployClustersControllerClusterRequestExtensionSettings: any;
export interface SharedVolumeDto {
    /** Name of the shared cluster volume */
    name: string;
    /** Size of the shared cluster volume in GB */
    size: number;
}
export declare const SharedVolumeDto: S.Codec<SharedVolumeDto>;
export interface ExistingSharedVolumeDto {
    /** Existing shared volume ID */
    id: string;
}
export declare const ExistingSharedVolumeDto: S.Codec<ExistingSharedVolumeDto>;
/** Existing shared volumes to attach to the cluster. Should be in the same location as the cluster. Must be previously created and attached to the cluster. */
export type DeployClustersControllerClusterRequestExistingVolumesList = Array<ExistingSharedVolumeDto>;
export declare const DeployClustersControllerClusterRequestExistingVolumesList: S.Codec<DeployClustersControllerClusterRequestExistingVolumesList>;
export interface DeployClustersControllerClusterRequest {
    /** Cluster instance type. Can be listed using the `GET /v1/cluster-types` endpoint. */
    cluster_type: string;
    /** OS image type or UUID for the cluster. For a list of advertised images, check `GET /v1/images/cluster`. Hidden images can also be deployed directly. The image must be enabled or explicitly enabled for the project owner and compatible with the cluster type. */
    image: string;
    /** SSH key IDs to attach to the cluster. Required if image is an OS image type. */
    ssh_key_ids?: DeployClustersControllerClusterRequestSshKeyIds;
    /** Startup script ID to run on cluster initialization */
    startup_script_id?: string;
    hostname: string;
    /** Optional cluster description. Omit or pass null to use an empty string. */
    description?: string;
    /** Key-value tags for the new cluster. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
    tags?: DeployClustersControllerClusterRequestTagsList;
    /** Location code for the cluster and its shared volume */
    location_code: string;
    /** Contract type. For clusters, only PAY_AS_YOU_GO currently supported. */
    contract?: DeployClustersControllerClusterRequestContract | (string & {});
    /** Extension settings for long-term contracts. Takes priority over auto_rental_extension and turn_to_pay_as_you_go. */
    extension_settings?: DeployClustersControllerClusterRequestExtensionSettings | (string & {});
    /** Deprecated: use extension_settings instead. Enable automatic rental extension for long-term contracts. */
    auto_rental_extension?: boolean;
    /** Deprecated: use extension_settings instead. Automatically convert to pay-as-you-go after the long-term period ends. */
    turn_to_pay_as_you_go?: boolean;
    /** Shared cluster volume (SFS) specification. Clusters have one shared volume mounted as /home. The OS volume is ephemeral and created automatically by the system. */
    shared_volume: SharedVolumeDto;
    /** Existing shared volumes to attach to the cluster. Should be in the same location as the cluster. Must be previously created and attached to the cluster. */
    existing_volumes?: DeployClustersControllerClusterRequestExistingVolumesList;
}
export declare const DeployClustersControllerClusterRequest: S.Codec<DeployClustersControllerClusterRequest>;
export interface DeployClustersControllerClusterResponse {
}
export declare const DeployClustersControllerClusterResponse: S.Codec<DeployClustersControllerClusterResponse>;
/** Feature ids to enable. Defaults to the features marked is_default */
export type DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestFeaturesList = Array<string>;
export declare const DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestFeaturesList: S.Codec<DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestFeaturesList>;
/** Size of the /dev/shm memory volume in MiB. Defaults to a size based on the GPU count (1 GPU: 1024, 2: 4096, 4: 8192, 8: 16384) or the template default */
export type DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestShmSizeMb = 64 | 128 | 256 | 512 | 1024 | 2048 | 4096 | 8192 | 16384 | 32768;
export declare const DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestShmSizeMb: any;
export interface PatchScalingTriggers {
    /** Scaling trigger based on queue load */
    queue_load?: QueueLoadScalingTrigger;
    /** Scaling trigger based on CPU utilization by percentage */
    cpu_utilization?: UtilizationScalingTrigger;
    /** Scaling trigger based on GPU utilization by percentage */
    gpu_utilization?: UtilizationScalingTrigger;
}
export declare const PatchScalingTriggers: S.Codec<PatchScalingTriggers>;
export interface PatchScalingOptionsPublicApiDto {
    /** Minimum number of replicas */
    min_replica_count?: number;
    /** Maximum number of replicas */
    max_replica_count?: number;
    /** Policy for scaling down replicas */
    scale_down_policy?: ScalingPolicy;
    /** Policy for scaling up replicas */
    scale_up_policy?: ScalingPolicy;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds?: number;
    /** Number of requests each replica can process concurrently. */
    concurrent_requests_per_replica?: number;
    /** Triggers for scaling up and down */
    scaling_triggers?: PatchScalingTriggers;
}
export declare const PatchScalingOptionsPublicApiDto: S.Codec<PatchScalingOptionsPublicApiDto>;
export interface DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequest {
    /** Id of the template */
    template_id: string;
    /** Name of the deployment. Immutable after creation */
    name: string;
    /** Variant id from the template detail. Defaults to the first variant */
    variant?: string;
    /** Feature ids to enable. Defaults to the features marked is_default */
    features?: DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestFeaturesList;
    /** Compute to deploy on. Defaults to the smallest offered configuration that fits the variant */
    compute?: ComputeResource;
    /** Name of an existing secret (POST /secrets) holding a Hugging Face token. Required for gated models */
    hf_token_secret_name?: string;
    /** Size of the /dev/shm memory volume in MiB. Defaults to a size based on the GPU count (1 GPU: 1024, 2: 4096, 4: 8192, 8: 16384) or the template default */
    shm_size_mb?: DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequestShmSizeMb | (number & {});
    /** Scaling options. Omitted fields use the platform defaults */
    scaling?: PatchScalingOptionsPublicApiDto;
}
export declare const DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequest: S.Codec<DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequest>;
export type DeployInstancesControllerInstanceRequestSshKeyIdsCase1List = Array<string>;
export declare const DeployInstancesControllerInstanceRequestSshKeyIdsCase1List: S.Codec<DeployInstancesControllerInstanceRequestSshKeyIdsCase1List>;
export type DeployInstancesControllerInstanceRequestSshKeyIds = string | DeployInstancesControllerInstanceRequestSshKeyIdsCase1List;
export declare const DeployInstancesControllerInstanceRequestSshKeyIds: S.Codec<DeployInstancesControllerInstanceRequestSshKeyIds>;
/** Key-value tags for the new instance. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
export type DeployInstancesControllerInstanceRequestTagsList = Array<TagDto>;
export declare const DeployInstancesControllerInstanceRequestTagsList: S.Codec<DeployInstancesControllerInstanceRequestTagsList>;
/** Optional, by default, nothing is deleted. Should we automatically delete, if instance is deleted because of spot? Allowed values: * `keep_detached` (default behavior, volume will be detached), * `move_to_trash` (will be deleted after 96 hours and counts towards the storage volume quota), * `delete_permanently` (will be deleted immediately). */
export type OsVolumeDtoOnSpotDiscontinue = "keep_detached" | "move_to_trash" | "delete_permanently";
export declare const OsVolumeDtoOnSpotDiscontinue: any;
/** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
export type OsVolumeDtoTagsList = Array<TagDto>;
export declare const OsVolumeDtoTagsList: S.Codec<OsVolumeDtoTagsList>;
export interface OsVolumeDto {
    name: string;
    size: number;
    /** Optional, by default, nothing is deleted. Should we automatically delete, if instance is deleted because of spot? Allowed values: * `keep_detached` (default behavior, volume will be detached), * `move_to_trash` (will be deleted after 96 hours and counts towards the storage volume quota), * `delete_permanently` (will be deleted immediately). */
    on_spot_discontinue?: OsVolumeDtoOnSpotDiscontinue | (string & {});
    /** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
    tags?: OsVolumeDtoTagsList;
}
export declare const OsVolumeDto: S.Codec<OsVolumeDto>;
/** Optional, by default, nothing is deleted. Should we automatically delete, if instance is deleted because of spot? Allowed values: * `keep_detached` (default behavior, volume will be detached), * `move_to_trash` (will be deleted after 96 hours and counts towards the storage volume quota), * `delete_permanently` (will be deleted immediately). */
export type VolumeDtoOnSpotDiscontinue = "keep_detached" | "move_to_trash" | "delete_permanently";
export declare const VolumeDtoOnSpotDiscontinue: any;
/** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
export type VolumeDtoTagsList = Array<TagDto>;
export declare const VolumeDtoTagsList: S.Codec<VolumeDtoTagsList>;
export type VolumeDtoType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const VolumeDtoType: any;
export interface VolumeDto {
    name: string;
    size: number;
    /** Optional, by default, nothing is deleted. Should we automatically delete, if instance is deleted because of spot? Allowed values: * `keep_detached` (default behavior, volume will be detached), * `move_to_trash` (will be deleted after 96 hours and counts towards the storage volume quota), * `delete_permanently` (will be deleted immediately). */
    on_spot_discontinue?: VolumeDtoOnSpotDiscontinue | (string & {});
    /** Key-value tags for the new volume. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
    tags?: VolumeDtoTagsList;
    type: VolumeDtoType | (string & {});
}
export declare const VolumeDto: S.Codec<VolumeDto>;
/** Additional (**non-OS**) volumes to create and attach to this new instance. (To configure **OS** volume, use `"image"` and `"os_volume"` properties.) */
export type DeployInstancesControllerInstanceRequestVolumesList = Array<VolumeDto>;
export declare const DeployInstancesControllerInstanceRequestVolumesList: S.Codec<DeployInstancesControllerInstanceRequestVolumesList>;
/** IDs of additional existing detached volumes to attach to this new instance when its created. (To configure instance **OS** volume, use `"image"` and `"os_volume"` properties.) */
export type DeployInstancesControllerInstanceRequestExistingVolumesList = Array<string>;
export declare const DeployInstancesControllerInstanceRequestExistingVolumesList: S.Codec<DeployInstancesControllerInstanceRequestExistingVolumesList>;
export type DeployInstancesControllerInstanceRequestContract = "LONG_TERM" | "PAY_AS_YOU_GO" | "SPOT";
export declare const DeployInstancesControllerInstanceRequestContract: any;
/** This field is deprecated as DYNAMIC_PRICE is removed. Only FIXED_PRICE is supported now. */
export type DeployInstancesControllerInstanceRequestPricing = "DYNAMIC_PRICE" | "FIXED_PRICE";
export declare const DeployInstancesControllerInstanceRequestPricing: any;
export interface DeployInstancesControllerInstanceRequest {
    instance_type: string;
    /** OS image specification for the created instance. There are two options: 1. OS image type or UUID. For a list of advertised images, check `GET /images`. Hidden images can also be deployed directly. The image must be enabled or explicitly enabled for the project owner. To set the name and size, use `"os_volume"` property. 2. Previously customized OS volume ID. (To create an OS volume, first make an instance with existing `"image"` type. To customize the volume content, ssh into that instance. Finally, delete the instance but keep the volume.) */
    image: string;
    ssh_key_ids?: DeployInstancesControllerInstanceRequestSshKeyIds;
    startup_script_id?: string;
    hostname: string;
    /** Optional instance description. */
    description?: string;
    /** Key-value tags for the new instance. Maximum 10. Omit `value` for a freeform tag. Keys are lowercased. */
    tags?: DeployInstancesControllerInstanceRequestTagsList;
    /** Location code for the instance and any newly created volumes */
    location_code: string;
    /** Newly created OS volume name and size (in GB). Use when `"image"` property is an OS image type. Object properties: * `name` - Name of the OS volume * `size` - Size of the OS volume in GB * `on_spot_discontinue` - Removal policy for the OS volume for spot instances. Optional, by default, nothing is deleted. Allowed values: `keep_detached` (default behavior), `move_to_trash` (will be deleted after 96 hours and counts towards the storage volume quota), `delete_permanently` (will be deleted immediately). */
    os_volume?: OsVolumeDto;
    /** Create a spot instance. Spot instances may be evicted by Verda at any time without warning. */
    is_spot?: boolean;
    coupon?: string;
    /** Additional (**non-OS**) volumes to create and attach to this new instance. (To configure **OS** volume, use `"image"` and `"os_volume"` properties.) */
    volumes?: DeployInstancesControllerInstanceRequestVolumesList;
    /** IDs of additional existing detached volumes to attach to this new instance when its created. (To configure instance **OS** volume, use `"image"` and `"os_volume"` properties.) */
    existing_volumes?: DeployInstancesControllerInstanceRequestExistingVolumesList;
    contract?: DeployInstancesControllerInstanceRequestContract | (string & {});
    /** This field is deprecated as DYNAMIC_PRICE is removed. Only FIXED_PRICE is supported now. */
    pricing?: DeployInstancesControllerInstanceRequestPricing | (string & {});
}
export declare const DeployInstancesControllerInstanceRequest: S.Codec<DeployInstancesControllerInstanceRequest>;
export interface DeployInstancesControllerInstanceResponse {
}
export declare const DeployInstancesControllerInstanceResponse: S.Codec<DeployInstancesControllerInstanceResponse>;
/** Filter by action type */
export type DownloadAuditLogControllerAuditLogRequestAction = "other" | "create" | "start" | "start_complete" | "shutdown_complete" | "shutdown" | "delete" | "delete_complete" | "attach" | "attach_complete" | "detach" | "detach_complete" | "clone" | "resize" | "rename" | "transfer" | "trash" | "trash_complete" | "restore" | "cancel" | "provisioning" | "running" | "configure_spot" | "authenticate" | "expire" | "accept" | "update_role" | "revoke" | "login" | "logout" | "login_failed" | "auth_mfa_enable" | "auth_mfa_disable" | "auth_mfa_challenge" | "auth_mfa_verify" | "password_reset" | "complete" | "redeem" | "suspend" | "unsuspend" | "approve" | "decline" | "update" | "rotate_secret" | "disable" | "enable";
export declare const DownloadAuditLogControllerAuditLogRequestAction: any;
/** Filter by object type */
export type DownloadAuditLogControllerAuditLogRequestObjectType = "compute" | "volume" | "ssh_key" | "invite" | "user" | "member" | "cloud_api_credential" | "object_storage_bucket" | "object_storage_key_pair" | "custom_image" | "startup_script" | "topup" | "coupon" | "bank_transfer" | "bank_transfer_account" | "balance" | "other" | "object_storage" | "quota_request" | "webhook" | "auto_top_up";
export declare const DownloadAuditLogControllerAuditLogRequestObjectType: any;
export interface DownloadAuditLogControllerAuditLogRequest {
    /** Filter by action type */
    action?: DownloadAuditLogControllerAuditLogRequestAction | (string & {});
    /** Filter by object type */
    object_type?: DownloadAuditLogControllerAuditLogRequestObjectType | (string & {});
    /** Return events created at or after this timestamp. Cannot be earlier than 90 days ago. Default is 90 days ago. */
    start_date?: string;
    /** Return events created at or before this timestamp. Cannot be before the start date. */
    end_date?: string;
}
export declare const DownloadAuditLogControllerAuditLogRequest: S.Codec<DownloadAuditLogControllerAuditLogRequest>;
export interface DownloadAuditLogResponseDto {
    /** Pre-signed URL to download the exported audit log JSON file. Short-lived; request a new export once it expires. */
    url: string;
    /** ISO timestamp after which the download URL expires. */
    expires_at: string;
}
export declare const DownloadAuditLogResponseDto: S.Codec<DownloadAuditLogResponseDto>;
export type GetAccessTokenDtoGrantType = "client_credentials" | "refresh_token";
export declare const GetAccessTokenDtoGrantType: any;
export interface GetAccessTokenDto {
    grant_type: GetAccessTokenDtoGrantType | (string & {});
    client_id: string;
    client_secret: string;
}
export declare const GetAccessTokenDto: S.Codec<GetAccessTokenDto>;
export type RefreshAccessTokenPublicApiDtoGrantType = "client_credentials" | "refresh_token";
export declare const RefreshAccessTokenPublicApiDtoGrantType: any;
export interface RefreshAccessTokenPublicApiDto {
    grant_type: RefreshAccessTokenPublicApiDtoGrantType | (string & {});
    refresh_token: string;
}
export declare const RefreshAccessTokenPublicApiDto: S.Codec<RefreshAccessTokenPublicApiDto>;
export type GetAccessTokenRequestBody = GetAccessTokenDto | RefreshAccessTokenPublicApiDto;
export declare const GetAccessTokenRequestBody: S.Codec<GetAccessTokenRequestBody>;
export interface GetAccessTokenRequest {
    body: GetAccessTokenRequestBody;
}
export declare const GetAccessTokenRequest: S.Codec<GetAccessTokenRequest>;
export interface GetAccessTokenResponseDto {
    /** Access token value */
    access_token: string;
    /** Token type */
    token_type: string;
    /** Token expiration time in seconds */
    expires_in: number;
    /** Refresh token value */
    refresh_token: string;
    /** Access scope */
    scope: string;
}
export declare const GetAccessTokenResponseDto: S.Codec<GetAccessTokenResponseDto>;
export type GetAuditLogControllerAuditLogRequestAction = "other" | "create" | "start" | "start_complete" | "shutdown_complete" | "shutdown" | "delete" | "delete_complete" | "attach" | "attach_complete" | "detach" | "detach_complete" | "clone" | "resize" | "rename" | "transfer" | "trash" | "trash_complete" | "restore" | "cancel" | "provisioning" | "running" | "configure_spot" | "authenticate" | "expire" | "accept" | "update_role" | "revoke" | "login" | "logout" | "login_failed" | "auth_mfa_enable" | "auth_mfa_disable" | "auth_mfa_challenge" | "auth_mfa_verify" | "password_reset" | "complete" | "redeem" | "suspend" | "unsuspend" | "approve" | "decline" | "update" | "rotate_secret" | "disable" | "enable";
export declare const GetAuditLogControllerAuditLogRequestAction: any;
export type GetAuditLogControllerAuditLogRequestObjectType = "compute" | "volume" | "ssh_key" | "invite" | "user" | "member" | "cloud_api_credential" | "object_storage_bucket" | "object_storage_key_pair" | "custom_image" | "startup_script" | "topup" | "coupon" | "bank_transfer" | "bank_transfer_account" | "balance" | "other" | "object_storage" | "quota_request" | "webhook" | "auto_top_up";
export declare const GetAuditLogControllerAuditLogRequestObjectType: any;
export interface GetAuditLogControllerAuditLogRequest {
    /** Filter by action type */
    action?: GetAuditLogControllerAuditLogRequestAction | (string & {});
    /** Filter by object type */
    object_type?: GetAuditLogControllerAuditLogRequestObjectType | (string & {});
    /** Return events created at or after this timestamp. Cannot be earlier than 90 days ago. Default is 90 days ago. */
    start_date?: string;
    /** Return events created at or before this timestamp. Cannot be before the start date. */
    end_date?: string;
    /** Number of items per page, default 20 maximum 100 */
    page_size?: number;
    /** Cursor to start from, as specified by the previous response */
    cursor?: string;
}
export declare const GetAuditLogControllerAuditLogRequest: S.Codec<GetAuditLogControllerAuditLogRequest>;
export interface AuditLogResponseDto {
    /** The version of the CloudEvents specification that the event uses. */
    specversion: string;
    id: string;
    source: string;
    /** The type of event that occurred, as `com.verda.api.<producer>.<object_type>.<action>.v1`. */
    type: string;
    /** This identifies the subject of the event in the context of the event producer. Typically it is ID of the object that the event is related to. */
    subject: string;
    /** The time the event occurred. */
    time: string;
    /** The data of the event, varies for different object types. For the subject of the event, the corresponding object is embedded; other related objects are referenced by ID. */
    data: unknown;
}
export declare const AuditLogResponseDto: S.Codec<AuditLogResponseDto>;
/** List of audit log events */
export type GetAuditLogResponseListDtoDataList = Array<AuditLogResponseDto>;
export declare const GetAuditLogResponseListDtoDataList: S.Codec<GetAuditLogResponseListDtoDataList>;
export interface GetAuditLogResponseListDto {
    /** List of audit log events */
    data: GetAuditLogResponseListDtoDataList;
    /** Cursor for next page, if there are more results */
    cursor?: string;
}
export declare const GetAuditLogResponseListDto: S.Codec<GetAuditLogResponseListDto>;
export interface GetBalanceControllerBalanceRequest {
}
export declare const GetBalanceControllerBalanceRequest: S.Codec<GetBalanceControllerBalanceRequest>;
/** Currency type */
export type BalanceResponseDtoCurrency = "usd" | "eur";
export declare const BalanceResponseDtoCurrency: any;
export interface BalanceResponseDto {
    /** Project balance */
    amount: number;
    /** Currency type */
    currency: BalanceResponseDtoCurrency;
}
export declare const BalanceResponseDto: S.Codec<BalanceResponseDto>;
export interface GetClusterAvailabilityControllerAllAvailabilitiesRequest {
    /** Check availability for a specific location code. By default, all locations are checked. */
    location_code?: string;
}
export declare const GetClusterAvailabilityControllerAllAvailabilitiesRequest: S.Codec<GetClusterAvailabilityControllerAllAvailabilitiesRequest>;
/** Array of available cluster types */
export type ClusterAvailabilityResponseDtoAvailabilitiesList = Array<string>;
export declare const ClusterAvailabilityResponseDtoAvailabilitiesList: S.Codec<ClusterAvailabilityResponseDtoAvailabilitiesList>;
export interface ClusterAvailabilityResponseDto {
    /** Location code */
    location_code: string;
    /** Array of available cluster types */
    availabilities: ClusterAvailabilityResponseDtoAvailabilitiesList;
}
export declare const ClusterAvailabilityResponseDto: S.Codec<ClusterAvailabilityResponseDto>;
export type GetClusterAvailabilityControllerAllAvailabilitiesResponseBodyList = Array<ClusterAvailabilityResponseDto>;
export declare const GetClusterAvailabilityControllerAllAvailabilitiesResponseBodyList: S.Codec<GetClusterAvailabilityControllerAllAvailabilitiesResponseBodyList>;
export type GetClusterAvailabilityControllerAllAvailabilitiesResponse = GetClusterAvailabilityControllerAllAvailabilitiesResponseBodyList;
export declare const GetClusterAvailabilityControllerAllAvailabilitiesResponse: S.Codec<GetClusterAvailabilityControllerAllAvailabilitiesResponse>;
export interface GetClustersControllerClusterByIdRequest {
    id: string;
}
export declare const GetClustersControllerClusterByIdRequest: S.Codec<GetClustersControllerClusterByIdRequest>;
export type GetClusterResponsePublicApiDtoStatus = "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
export declare const GetClusterResponsePublicApiDtoStatus: any;
export type GetClusterResponsePublicApiDtoTagsList = Array<TagResponseDto>;
export declare const GetClusterResponsePublicApiDtoTagsList: S.Codec<GetClusterResponsePublicApiDtoTagsList>;
/** SSH key IDs used to access the cluster jump host */
export type GetClusterResponsePublicApiDtoSshKeyIdsList = Array<string>;
export declare const GetClusterResponsePublicApiDtoSshKeyIdsList: S.Codec<GetClusterResponsePublicApiDtoSshKeyIdsList>;
/** Contract type used for this cluster */
export type GetClusterResponsePublicApiDtoContract = "LONG_TERM" | "PAY_AS_YOU_GO";
export declare const GetClusterResponsePublicApiDtoContract: any;
/** Extension settings for long-term contracts */
export type GetClusterResponsePublicApiDtoExtensionSettings = "auto_renew" | "pay_as_you_go" | "end_contract";
export declare const GetClusterResponsePublicApiDtoExtensionSettings: any;
/** Worker nodes of this cluster. You can access them from the jump host by executing `ssh <hostname>` */
export type GetClusterResponsePublicApiDtoWorkerNodesList = Array<string>;
export declare const GetClusterResponsePublicApiDtoWorkerNodesList: S.Codec<GetClusterResponsePublicApiDtoWorkerNodesList>;
/** Shared volumes attached to this cluster. There is always one shared volume mounted as /home. */
export type GetClusterResponsePublicApiDtoSharedVolumesList = Array<string>;
export declare const GetClusterResponsePublicApiDtoSharedVolumesList: S.Codec<GetClusterResponsePublicApiDtoSharedVolumesList>;
export interface GetClusterResponsePublicApiDto {
    id: string;
    /** Jump host IP address */
    ip: string;
    status: GetClusterResponsePublicApiDtoStatus;
    created_at: string;
    created_by_user_id?: string;
    cpu: unknown;
    gpu: unknown;
    gpu_memory: unknown;
    memory: unknown;
    hostname: string;
    /** Cluster description; an empty string when none was supplied. */
    description: string;
    tags: GetClusterResponsePublicApiDtoTagsList;
    location: string;
    price_per_hour: number;
    cluster_type: string;
    /** OS image used to deploy the cluster nodes */
    image: string;
    os_name: string;
    startup_script_id?: string;
    /** SSH key IDs used to access the cluster jump host */
    ssh_key_ids: GetClusterResponsePublicApiDtoSshKeyIdsList;
    /** Contract type used for this cluster */
    contract: GetClusterResponsePublicApiDtoContract;
    /** Deprecated: use extension_settings instead. */
    auto_rental_extension?: boolean;
    /** Deprecated: use extension_settings instead. */
    turn_to_pay_as_you_go?: boolean;
    /** Extension settings for long-term contracts */
    extension_settings?: GetClusterResponsePublicApiDtoExtensionSettings;
    /** Long-term rental period for this cluster, e.g. 1 week etc. */
    long_term_period?: string;
    /** Worker nodes of this cluster. You can access them from the jump host by executing `ssh <hostname>` */
    worker_nodes?: GetClusterResponsePublicApiDtoWorkerNodesList;
    /** Shared volumes attached to this cluster. There is always one shared volume mounted as /home. */
    shared_volumes?: GetClusterResponsePublicApiDtoSharedVolumesList;
}
export declare const GetClusterResponsePublicApiDto: S.Codec<GetClusterResponsePublicApiDto>;
export interface GetClustersControllerInstancesRequest {
}
export declare const GetClustersControllerInstancesRequest: S.Codec<GetClustersControllerInstancesRequest>;
export type GetClustersControllerInstancesResponseBodyList = Array<GetClusterResponsePublicApiDto>;
export declare const GetClustersControllerInstancesResponseBodyList: S.Codec<GetClustersControllerInstancesResponseBodyList>;
export type GetClustersControllerInstancesResponse = GetClustersControllerInstancesResponseBodyList;
export declare const GetClustersControllerInstancesResponse: S.Codec<GetClustersControllerInstancesResponse>;
export type GetClusterTypesControllerInstanceTypesRequestCurrency = "usd" | "eur";
export declare const GetClusterTypesControllerInstanceTypesRequestCurrency: any;
export interface GetClusterTypesControllerInstanceTypesRequest {
    /** Currency to get the price for cluster types */
    currency?: GetClusterTypesControllerInstanceTypesRequestCurrency | (string & {});
}
export declare const GetClusterTypesControllerInstanceTypesRequest: S.Codec<GetClusterTypesControllerInstanceTypesRequest>;
/** Currency type */
export type ClusterTypeCurrency = "usd" | "eur";
export declare const ClusterTypeCurrency: any;
/** Node details */
export type ClusterTypeNodeDetailsList = Array<string>;
export declare const ClusterTypeNodeDetailsList: S.Codec<ClusterTypeNodeDetailsList>;
/** Supported OS image types */
export type ClusterTypeSupportedOsList = Array<string>;
export declare const ClusterTypeSupportedOsList: S.Codec<ClusterTypeSupportedOsList>;
export interface ClusterType {
    /** Instance type ID */
    id: string;
    /** GPU model */
    model: string;
    /** GPU model name */
    name: string;
    /** Instance type */
    cluster_type: string;
    /** CPU details */
    cpu: unknown;
    /** GPU details */
    gpu: unknown;
    /** GPU memory details */
    gpu_memory: unknown;
    /** Memory details */
    memory: unknown;
    /** Price per hour */
    price_per_hour: string;
    /** Currency type */
    currency: ClusterTypeCurrency;
    /** Manufacturer */
    manufacturer: string;
    /** Node details */
    node_details: ClusterTypeNodeDetailsList;
    /** Supported OS image types */
    supported_os: ClusterTypeSupportedOsList;
}
export declare const ClusterType: S.Codec<ClusterType>;
export type GetClusterTypesControllerInstanceTypesResponseBodyList = Array<ClusterType>;
export declare const GetClusterTypesControllerInstanceTypesResponseBodyList: S.Codec<GetClusterTypesControllerInstanceTypesResponseBodyList>;
export type GetClusterTypesControllerInstanceTypesResponse = GetClusterTypesControllerInstanceTypesResponseBodyList;
export declare const GetClusterTypesControllerInstanceTypesResponse: S.Codec<GetClusterTypesControllerInstanceTypesResponse>;
export interface GetContainerDeploymentTemplatesPublicApiControllerTemplateRequest {
    /** Id of the template */
    template_id: string;
}
export declare const GetContainerDeploymentTemplatesPublicApiControllerTemplateRequest: S.Codec<GetContainerDeploymentTemplatesPublicApiControllerTemplateRequest>;
/** Accepted input modalities */
export type ContainerDeploymentTemplateDetailPublicApiDtoInputModalitiesList = Array<string>;
export declare const ContainerDeploymentTemplateDetailPublicApiDtoInputModalitiesList: S.Codec<ContainerDeploymentTemplateDetailPublicApiDtoInputModalitiesList>;
/** Produced output modalities */
export type ContainerDeploymentTemplateDetailPublicApiDtoOutputModalitiesList = Array<string>;
export declare const ContainerDeploymentTemplateDetailPublicApiDtoOutputModalitiesList: S.Codec<ContainerDeploymentTemplateDetailPublicApiDtoOutputModalitiesList>;
/** Coarse task labels */
export type ContainerDeploymentTemplateDetailPublicApiDtoTasksList = Array<string>;
export declare const ContainerDeploymentTemplateDetailPublicApiDtoTasksList: S.Codec<ContainerDeploymentTemplateDetailPublicApiDtoTasksList>;
export interface ContainerDeploymentTemplateVariantPublicApiDto {
    /** Variant identifier, passed as `variant` when deploying */
    id: string;
    /** Weight precision */
    precision: string;
    /** Hugging Face repository this variant loads */
    model_repository: string;
    /** Minimum total GPU memory in GB */
    min_vram_gb: number;
    /** Whether this variant is used when no variant is given */
    is_default: boolean;
    /** What sets this variant apart */
    description?: string;
    /** Smallest compute configuration currently offered that fits this variant. Null when nothing offered fits */
    recommended_compute: ComputeResource | null;
}
export declare const ContainerDeploymentTemplateVariantPublicApiDto: S.Codec<ContainerDeploymentTemplateVariantPublicApiDto>;
/** Selectable weight variants. The first one is the default */
export type ContainerDeploymentTemplateDetailPublicApiDtoVariantsList = Array<ContainerDeploymentTemplateVariantPublicApiDto>;
export declare const ContainerDeploymentTemplateDetailPublicApiDtoVariantsList: S.Codec<ContainerDeploymentTemplateDetailPublicApiDtoVariantsList>;
/** Feature ids that cannot be enabled together with this one */
export type ContainerDeploymentTemplateFeaturePublicApiDtoConflictsWithList = Array<string>;
export declare const ContainerDeploymentTemplateFeaturePublicApiDtoConflictsWithList: S.Codec<ContainerDeploymentTemplateFeaturePublicApiDtoConflictsWithList>;
export interface ContainerDeploymentTemplateFeaturePublicApiDto {
    /** Feature identifier, passed in `features` when deploying */
    id: string;
    /** Human-readable name */
    name: string;
    /** What the feature enables */
    description?: string;
    /** Whether the feature is on when no features are given */
    is_default: boolean;
    /** Feature ids that cannot be enabled together with this one */
    conflicts_with: ContainerDeploymentTemplateFeaturePublicApiDtoConflictsWithList;
}
export declare const ContainerDeploymentTemplateFeaturePublicApiDto: S.Codec<ContainerDeploymentTemplateFeaturePublicApiDto>;
/** Independently selectable serving features */
export type ContainerDeploymentTemplateDetailPublicApiDtoFeaturesList = Array<ContainerDeploymentTemplateFeaturePublicApiDto>;
export declare const ContainerDeploymentTemplateDetailPublicApiDtoFeaturesList: S.Codec<ContainerDeploymentTemplateDetailPublicApiDtoFeaturesList>;
export interface ContainerDeploymentTemplateDetailPublicApiDto {
    /** Stable, URL-safe template identifier used in template paths */
    id: string;
    /** Human-readable name of the model */
    name: string;
    /** Description of the model */
    description: string;
    /** Provider of the model */
    provider: string;
    /** Serving engine used by the template */
    engine: string;
    /** Hugging Face repository the default variant loads */
    model_repository: string;
    /** Parameter count of the model (display string) */
    parameters: string;
    /** Maximum context length in tokens */
    context_length: number;
    /** Accepted input modalities */
    input_modalities: ContainerDeploymentTemplateDetailPublicApiDtoInputModalitiesList;
    /** Produced output modalities */
    output_modalities: ContainerDeploymentTemplateDetailPublicApiDtoOutputModalitiesList;
    /** Coarse task labels */
    tasks: ContainerDeploymentTemplateDetailPublicApiDtoTasksList;
    /** Whether a Hugging Face token is required to deploy the model (gated checkpoint) */
    requires_hugging_face_token: boolean;
    /** Minimum total GPU memory in GB for the default variant */
    min_vram_gb: number;
    /** Smallest compute configuration currently offered that fits the default variant. Null when nothing offered fits */
    recommended_compute: ComputeResource | null;
    /** Pinned Hugging Face revision of the default repository. Null tracks the main branch */
    revision: unknown | null;
    /** Selectable weight variants. The first one is the default */
    variants: ContainerDeploymentTemplateDetailPublicApiDtoVariantsList;
    /** Independently selectable serving features */
    features: ContainerDeploymentTemplateDetailPublicApiDtoFeaturesList;
}
export declare const ContainerDeploymentTemplateDetailPublicApiDto: S.Codec<ContainerDeploymentTemplateDetailPublicApiDto>;
export type GetContainerRegistryControllerContainerRegistryPricingRequestCurrency = "usd" | "eur";
export declare const GetContainerRegistryControllerContainerRegistryPricingRequestCurrency: any;
export interface GetContainerRegistryControllerContainerRegistryPricingRequest {
    /** Currency to get the container registry price for */
    currency?: GetContainerRegistryControllerContainerRegistryPricingRequestCurrency | (string & {});
}
export declare const GetContainerRegistryControllerContainerRegistryPricingRequest: S.Codec<GetContainerRegistryControllerContainerRegistryPricingRequest>;
/** Currency */
export type ContainerRegistryPricingResponseDtoCurrency = "usd" | "eur";
export declare const ContainerRegistryPricingResponseDtoCurrency: any;
export interface ContainerRegistryPricingResponseDto {
    /** Price per GB per month */
    price_per_month_per_gb: number;
    /** Currency */
    currency: ContainerRegistryPricingResponseDtoCurrency;
}
export declare const ContainerRegistryPricingResponseDto: S.Codec<ContainerRegistryPricingResponseDto>;
export type GetContainerTypesControllerContainerTypesRequestCurrency = "usd" | "eur";
export declare const GetContainerTypesControllerContainerTypesRequestCurrency: any;
export interface GetContainerTypesControllerContainerTypesRequest {
    /** Currency to get the price history for */
    currency?: GetContainerTypesControllerContainerTypesRequestCurrency | (string & {});
}
export declare const GetContainerTypesControllerContainerTypesRequest: S.Codec<GetContainerTypesControllerContainerTypesRequest>;
/** Currency type */
export type ContainerTypeCurrency = "usd" | "eur";
export declare const ContainerTypeCurrency: any;
export interface ContainerType {
    /** Instance type ID */
    id: string;
    /** GPU model */
    model: string;
    /** GPU model name */
    name: string;
    /** Instance type */
    instance_type: string;
    /** CPU details */
    cpu: unknown;
    /** GPU details */
    gpu: unknown;
    /** GPU memory details */
    gpu_memory: unknown;
    /** Memory details */
    memory: unknown;
    /** Current serverless price */
    serverless_price: string;
    /** Current serverless spot price */
    serverless_spot_price: string;
    /** Currency type */
    currency: ContainerTypeCurrency;
    /** Manufacturer */
    manufacturer: string;
}
export declare const ContainerType: S.Codec<ContainerType>;
export type GetContainerTypesControllerContainerTypesResponseBodyList = Array<ContainerType>;
export declare const GetContainerTypesControllerContainerTypesResponseBodyList: S.Codec<GetContainerTypesControllerContainerTypesResponseBodyList>;
export type GetContainerTypesControllerContainerTypesResponse = GetContainerTypesControllerContainerTypesResponseBodyList;
export declare const GetContainerTypesControllerContainerTypesResponse: S.Codec<GetContainerTypesControllerContainerTypesResponse>;
export interface GetDeploymentRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const GetDeploymentRequest: S.Codec<GetDeploymentRequest>;
export type GetDeploymentLogsPublicApiControllerLogsRequestPodList = Array<string>;
export declare const GetDeploymentLogsPublicApiControllerLogsRequestPodList: S.Codec<GetDeploymentLogsPublicApiControllerLogsRequestPodList>;
export type GetDeploymentLogsPublicApiControllerLogsRequestOrder = "asc" | "desc";
export declare const GetDeploymentLogsPublicApiControllerLogsRequestOrder: any;
export interface GetDeploymentLogsPublicApiControllerLogsRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Filter by container name. If omitted, the endpoint returns the logs of all user containers of the deployment. A name that is not a container of this deployment returns no log lines. */
    container_name?: string;
    /** Filter by replica (pod) name. Repeat the parameter for multiple values. */
    pod?: GetDeploymentLogsPublicApiControllerLogsRequestPodList;
    /** Filter log lines containing the given text. */
    search_text?: string;
    /** Relative time window, for example 30s, 15m, 2h, 3d. Defaults to 15m. The time range cannot exceed 7 days. */
    since?: string;
    /** Start of the time range. ISO 8601 date or epoch time (s, ms, us, or ns). Overrides since. The time range cannot exceed 7 days. */
    start?: string;
    /** End of the time range. ISO 8601 date, epoch time, or "now". Defaults to now. */
    end?: string;
    /** Order of the returned log lines by timestamp. The endpoint sorts the time range before it applies limit, so desc returns the newest lines of the range and asc returns the oldest. Defaults to desc. */
    order?: GetDeploymentLogsPublicApiControllerLogsRequestOrder | (string & {});
    /** Maximum number of log lines to return. Narrow the time range or use the order parameter to reach lines outside the returned page. */
    limit?: number;
}
export declare const GetDeploymentLogsPublicApiControllerLogsRequest: S.Codec<GetDeploymentLogsPublicApiControllerLogsRequest>;
export interface DeploymentLogEntryPublicApiResponseDto {
    /** Log line timestamp, ISO 8601 with nanosecond precision. */
    timestamp: string;
    /** Name of the container that produced the log line. */
    container_name: string;
    /** Name of the replica (pod) that produced the log line. */
    replica: string;
    /** The log line content. */
    message: string;
}
export declare const DeploymentLogEntryPublicApiResponseDto: S.Codec<DeploymentLogEntryPublicApiResponseDto>;
export type GetDeploymentLogsPublicApiControllerLogsResponseBodyList = Array<DeploymentLogEntryPublicApiResponseDto>;
export declare const GetDeploymentLogsPublicApiControllerLogsResponseBodyList: S.Codec<GetDeploymentLogsPublicApiControllerLogsResponseBodyList>;
export type GetDeploymentLogsPublicApiControllerLogsResponse = GetDeploymentLogsPublicApiControllerLogsResponseBodyList;
export declare const GetDeploymentLogsPublicApiControllerLogsResponse: S.Codec<GetDeploymentLogsPublicApiControllerLogsResponse>;
export interface GetDeploymentScalingRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const GetDeploymentScalingRequest: S.Codec<GetDeploymentScalingRequest>;
export interface UtilizationScalingTriggerPublicApiResponse {
    enabled: boolean;
    threshold: number | null;
}
export declare const UtilizationScalingTriggerPublicApiResponse: S.Codec<UtilizationScalingTriggerPublicApiResponse>;
export interface ScalingTriggersPublicApiResponse {
    queue_load: QueueLoadScalingTrigger;
    cpu_utilization?: UtilizationScalingTriggerPublicApiResponse;
    gpu_utilization?: UtilizationScalingTriggerPublicApiResponse;
}
export declare const ScalingTriggersPublicApiResponse: S.Codec<ScalingTriggersPublicApiResponse>;
export interface ScalingOptionsPublicApiDto {
    /** Minimum number of replicas */
    min_replica_count: number;
    /** Maximum number of replicas */
    max_replica_count: number;
    /** Policy for scaling down replicas */
    scale_down_policy: ScalingPolicy;
    /** Policy for scaling up replicas */
    scale_up_policy: ScalingPolicy;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds: number;
    /** Number of requests each replica can process concurrently. */
    concurrent_requests_per_replica: number;
    /** Triggers for scaling up and down */
    scaling_triggers: ScalingTriggersPublicApiResponse;
}
export declare const ScalingOptionsPublicApiDto: S.Codec<ScalingOptionsPublicApiDto>;
export type GetDeploymentSystemLogsPublicApiControllerLogsRequestReasonList = Array<string>;
export declare const GetDeploymentSystemLogsPublicApiControllerLogsRequestReasonList: S.Codec<GetDeploymentSystemLogsPublicApiControllerLogsRequestReasonList>;
export type GetDeploymentSystemLogsPublicApiControllerLogsRequestInvolvedObjectList = Array<string>;
export declare const GetDeploymentSystemLogsPublicApiControllerLogsRequestInvolvedObjectList: S.Codec<GetDeploymentSystemLogsPublicApiControllerLogsRequestInvolvedObjectList>;
export type GetDeploymentSystemLogsPublicApiControllerLogsRequestOrder = "asc" | "desc";
export declare const GetDeploymentSystemLogsPublicApiControllerLogsRequestOrder: any;
export interface GetDeploymentSystemLogsPublicApiControllerLogsRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Exact display reasons. An unknown reason returns no events. */
    reason?: GetDeploymentSystemLogsPublicApiControllerLogsRequestReasonList;
    /** Exact involved object names. */
    involved_object?: GetDeploymentSystemLogsPublicApiControllerLogsRequestInvolvedObjectList;
    /** Case-insensitive substring of the clean message, display reason and involved object. Whitespace is trimmed; blank search imposes no restriction. */
    search_text?: string;
    /** Relative window such as 15m or 1d. Maximum range is 7 days. Blank time parameters use their defaults. */
    since?: string;
    /** ISO 8601 or epoch time (s, ms, us or ns). Overrides since. Maximum range is 7 days. */
    start?: string;
    /** ISO 8601, epoch time (s, ms, us or ns), or now. */
    end?: unknown;
    /** Timestamp order of the returned entries. Ascending does not reach events the request did not read. */
    order?: GetDeploymentSystemLogsPublicApiControllerLogsRequestOrder | (string & {});
    /** Maximum number of entries to return. There is no paging: change the time range or the filters to reach other events. */
    limit?: number;
}
export declare const GetDeploymentSystemLogsPublicApiControllerLogsRequest: S.Codec<GetDeploymentSystemLogsPublicApiControllerLogsRequest>;
export interface SystemLogEntryPublicApiResponseDto {
    /** Latest observed timestamp of the group, RFC3339 with nanosecond precision. */
    timestamp: string;
    /** Display reason of the event. */
    reason: string;
    /** Event message without an observation-count suffix. */
    message: string;
    /** Workload or child object the event concerns; not necessarily a replica. */
    involved_object: string;
    /** Collected records grouped into this entry, not a Kubernetes occurrence count. May be partial at the raw scan cap. */
    count: number;
}
export declare const SystemLogEntryPublicApiResponseDto: S.Codec<SystemLogEntryPublicApiResponseDto>;
export type GetDeploymentSystemLogsPublicApiControllerLogsResponseBodyList = Array<SystemLogEntryPublicApiResponseDto>;
export declare const GetDeploymentSystemLogsPublicApiControllerLogsResponseBodyList: S.Codec<GetDeploymentSystemLogsPublicApiControllerLogsResponseBodyList>;
export type GetDeploymentSystemLogsPublicApiControllerLogsResponse = GetDeploymentSystemLogsPublicApiControllerLogsResponseBodyList;
export declare const GetDeploymentSystemLogsPublicApiControllerLogsResponse: S.Codec<GetDeploymentSystemLogsPublicApiControllerLogsResponse>;
export interface GetImagesControllerClusterImageTypesRequest {
    /** Filter OS images by instance type. Default is all cluster images. */
    instance_type?: string;
}
export declare const GetImagesControllerClusterImageTypesRequest: S.Codec<GetImagesControllerClusterImageTypesRequest>;
/** Image details */
export type OsDetailsList = Array<string>;
export declare const OsDetailsList: S.Codec<OsDetailsList>;
export interface Os {
    /** Image id */
    id: string;
    /** Image type */
    image_type: string;
    /** Image name */
    name: string;
    /** Is default image */
    is_default: boolean;
    /** Image details */
    details: OsDetailsList;
    /** Image category */
    category: string;
    /** Is cluster */
    is_cluster: boolean;
}
export declare const Os: S.Codec<Os>;
export type GetImagesControllerClusterImageTypesResponseBodyList = Array<Os>;
export declare const GetImagesControllerClusterImageTypesResponseBodyList: S.Codec<GetImagesControllerClusterImageTypesResponseBodyList>;
export type GetImagesControllerClusterImageTypesResponse = GetImagesControllerClusterImageTypesResponseBodyList;
export declare const GetImagesControllerClusterImageTypesResponse: S.Codec<GetImagesControllerClusterImageTypesResponse>;
export interface GetImagesControllerImageTypesRequest {
    /** Filter OS images by instance type. Default is all instance images. */
    instance_type?: string;
}
export declare const GetImagesControllerImageTypesRequest: S.Codec<GetImagesControllerImageTypesRequest>;
export type GetImagesControllerImageTypesResponseBodyList = Array<Os>;
export declare const GetImagesControllerImageTypesResponseBodyList: S.Codec<GetImagesControllerImageTypesResponseBodyList>;
export type GetImagesControllerImageTypesResponse = GetImagesControllerImageTypesResponseBodyList;
export declare const GetImagesControllerImageTypesResponse: S.Codec<GetImagesControllerImageTypesResponse>;
export interface GetInstanceAvailabilityControllerAllAvailabilitiesRequest {
    /** Deprecated camelCase alias for is_spot. */
    isSpot?: string;
    /** Deprecated camelCase alias for location_code. */
    locationCode?: string;
    /** Check spot instance availability */
    is_spot?: string;
    /** Check availability for a specific location code. If omitted, all locations are checked. */
    location_code?: string;
}
export declare const GetInstanceAvailabilityControllerAllAvailabilitiesRequest: S.Codec<GetInstanceAvailabilityControllerAllAvailabilitiesRequest>;
/** Array of available instance types */
export type InstanceAvailabilityResponseDtoAvailabilitiesList = Array<string>;
export declare const InstanceAvailabilityResponseDtoAvailabilitiesList: S.Codec<InstanceAvailabilityResponseDtoAvailabilitiesList>;
export interface InstanceAvailabilityResponseDto {
    /** Location code */
    location_code: string;
    /** Array of available instance types */
    availabilities: InstanceAvailabilityResponseDtoAvailabilitiesList;
}
export declare const InstanceAvailabilityResponseDto: S.Codec<InstanceAvailabilityResponseDto>;
export type GetInstanceAvailabilityControllerAllAvailabilitiesResponseBodyList = Array<InstanceAvailabilityResponseDto>;
export declare const GetInstanceAvailabilityControllerAllAvailabilitiesResponseBodyList: S.Codec<GetInstanceAvailabilityControllerAllAvailabilitiesResponseBodyList>;
export type GetInstanceAvailabilityControllerAllAvailabilitiesResponse = GetInstanceAvailabilityControllerAllAvailabilitiesResponseBodyList;
export declare const GetInstanceAvailabilityControllerAllAvailabilitiesResponse: S.Codec<GetInstanceAvailabilityControllerAllAvailabilitiesResponse>;
export interface GetInstanceGroupsPublicControllerRequest {
    instance_group_id: string;
}
export declare const GetInstanceGroupsPublicControllerRequest: S.Codec<GetInstanceGroupsPublicControllerRequest>;
export interface GetInstancesControllerInstanceByIdRequest {
    instance_id: string;
}
export declare const GetInstancesControllerInstanceByIdRequest: S.Codec<GetInstancesControllerInstanceByIdRequest>;
export type GetInstanceResponsePublicApiDtoStatus = "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
export declare const GetInstanceResponsePublicApiDtoStatus: any;
export type GetInstanceResponsePublicApiDtoTagsList = Array<TagResponseDto>;
export declare const GetInstanceResponsePublicApiDtoTagsList: S.Codec<GetInstanceResponsePublicApiDtoTagsList>;
export type GetInstanceResponsePublicApiDtoSshKeyIdsList = Array<string>;
export declare const GetInstanceResponsePublicApiDtoSshKeyIdsList: S.Codec<GetInstanceResponsePublicApiDtoSshKeyIdsList>;
export type GetInstanceResponsePublicApiDtoContract = "LONG_TERM" | "PAY_AS_YOU_GO" | "SPOT";
export declare const GetInstanceResponsePublicApiDtoContract: any;
export type GetInstanceResponsePublicApiDtoPricing = "DYNAMIC_PRICE" | "FIXED_PRICE";
export declare const GetInstanceResponsePublicApiDtoPricing: any;
export type GetInstanceResponsePublicApiDtoVolumeIdsList = Array<string>;
export declare const GetInstanceResponsePublicApiDtoVolumeIdsList: S.Codec<GetInstanceResponsePublicApiDtoVolumeIdsList>;
export interface GetInstanceResponsePublicApiDto {
    id: string;
    /** Public address; `null` when the instance is not reachable from the internet */
    ip: string | null;
    status: GetInstanceResponsePublicApiDtoStatus;
    created_at: string;
    created_by_user_id?: string;
    cpu: unknown;
    gpu: unknown;
    gpu_memory: unknown;
    memory: unknown;
    storage: unknown;
    hostname: string;
    /** Instance description; an empty string when none was supplied. */
    description: string;
    tags: GetInstanceResponsePublicApiDtoTagsList;
    location: string;
    price_per_hour: number;
    is_spot: boolean;
    instance_type: string;
    image: string;
    os_name: string;
    startup_script_id: string;
    ssh_key_ids: GetInstanceResponsePublicApiDtoSshKeyIdsList;
    os_volume_id: string;
    jupyter_token: string;
    contract: GetInstanceResponsePublicApiDtoContract;
    pricing: GetInstanceResponsePublicApiDtoPricing;
    volume_ids: GetInstanceResponsePublicApiDtoVolumeIdsList;
}
export declare const GetInstanceResponsePublicApiDto: S.Codec<GetInstanceResponsePublicApiDto>;
export type GetInstancesControllerInstancesRequestStatus = "running" | "provisioning" | "offline" | "discontinued" | "unknown" | "ordered" | "notfound" | "new" | "error" | "deleting" | "validating" | "no_capacity" | "installation_failed";
export declare const GetInstancesControllerInstancesRequestStatus: any;
export type GetInstancesControllerInstancesRequestTagList = Array<string>;
export declare const GetInstancesControllerInstancesRequestTagList: S.Codec<GetInstancesControllerInstancesRequestTagList>;
export interface GetInstancesControllerInstancesRequest {
    /** Get compute deployments with selected status. Optional */
    status?: GetInstancesControllerInstancesRequestStatus | (string & {});
    /** Get one compute by computeId. Optional */
    computeId?: string;
    /** Return only deployments carrying every listed tag: `key` matches any value, `key=value` matches the value exactly (split at the first `=`). Repeat the parameter to require multiple tags. */
    tag?: GetInstancesControllerInstancesRequestTagList;
}
export declare const GetInstancesControllerInstancesRequest: S.Codec<GetInstancesControllerInstancesRequest>;
export type GetInstancesControllerInstancesResponseBodyList = Array<GetInstanceResponsePublicApiDto>;
export declare const GetInstancesControllerInstancesResponseBodyList: S.Codec<GetInstancesControllerInstancesResponseBodyList>;
export type GetInstancesControllerInstancesResponse = GetInstancesControllerInstancesResponseBodyList;
export declare const GetInstancesControllerInstancesResponse: S.Codec<GetInstancesControllerInstancesResponse>;
export type GetInstanceTypesControllerInstanceTypesRequestCurrency = "usd" | "eur";
export declare const GetInstanceTypesControllerInstanceTypesRequestCurrency: any;
export interface GetInstanceTypesControllerInstanceTypesRequest {
    /** Currency to get the price history for */
    currency?: GetInstanceTypesControllerInstanceTypesRequestCurrency | (string & {});
}
export declare const GetInstanceTypesControllerInstanceTypesRequest: S.Codec<GetInstanceTypesControllerInstanceTypesRequest>;
/** Use cases for instance type */
export type InstanceTypeBestForList = Array<string>;
export declare const InstanceTypeBestForList: S.Codec<InstanceTypeBestForList>;
/** Currency type */
export type InstanceTypeCurrency = "usd" | "eur";
export declare const InstanceTypeCurrency: any;
/** Supported OS image types */
export type InstanceTypeSupportedOsList = Array<string>;
export declare const InstanceTypeSupportedOsList: S.Codec<InstanceTypeSupportedOsList>;
export interface InstanceType {
    /** Use cases for instance type */
    best_for: InstanceTypeBestForList;
    /** CPU details */
    cpu: unknown;
    /** Deploy warning */
    deploy_warning?: string;
    /** Instance type description */
    description: string;
    /** GPU details */
    gpu: unknown;
    /** GPU memory details */
    gpu_memory: unknown;
    /** Instance type ID */
    id: string;
    /** Instance type */
    instance_type: string;
    /** Memory details */
    memory: unknown;
    /** GPU model */
    model: string;
    /** GPU model name */
    name: string;
    /** P2P details */
    p2p: string;
    /** Price per hour */
    price_per_hour: string;
    /** Spot price per hour */
    spot_price: string;
    /** Current dynamic price */
    dynamic_price?: string;
    /** Ceiling value for dynamic price */
    max_dynamic_price: string;
    /** Current serverless price */
    serverless_price?: string;
    /** Current serverless spot price */
    serverless_spot_price?: string;
    /** Storage details */
    storage: unknown;
    /** Currency type */
    currency: InstanceTypeCurrency;
    /** Manufacturer */
    manufacturer: string;
    /** Display name */
    display_name: string;
    /** Supported OS image types */
    supported_os: InstanceTypeSupportedOsList;
}
export declare const InstanceType: S.Codec<InstanceType>;
export type GetInstanceTypesControllerInstanceTypesResponseBodyList = Array<InstanceType>;
export declare const GetInstanceTypesControllerInstanceTypesResponseBodyList: S.Codec<GetInstanceTypesControllerInstanceTypesResponseBodyList>;
export type GetInstanceTypesControllerInstanceTypesResponse = GetInstanceTypesControllerInstanceTypesResponseBodyList;
export declare const GetInstanceTypesControllerInstanceTypesResponse: S.Codec<GetInstanceTypesControllerInstanceTypesResponse>;
export type GetJobLogsPublicApiControllerLogsRequestPodList = Array<string>;
export declare const GetJobLogsPublicApiControllerLogsRequestPodList: S.Codec<GetJobLogsPublicApiControllerLogsRequestPodList>;
export type GetJobLogsPublicApiControllerLogsRequestOrder = "asc" | "desc";
export declare const GetJobLogsPublicApiControllerLogsRequestOrder: any;
export interface GetJobLogsPublicApiControllerLogsRequest {
    /** Name of the job */
    jobName: string;
    /** Filter by container name. If omitted, the endpoint returns the logs of all user containers of the deployment. A name that is not a container of this deployment returns no log lines. */
    container_name?: string;
    /** Filter by replica (pod) name. Repeat the parameter for multiple values. */
    pod?: GetJobLogsPublicApiControllerLogsRequestPodList;
    /** Filter log lines containing the given text. */
    search_text?: string;
    /** Relative time window, for example 30s, 15m, 2h, 3d. Defaults to 15m. The time range cannot exceed 7 days. */
    since?: string;
    /** Start of the time range. ISO 8601 date or epoch time (s, ms, us, or ns). Overrides since. The time range cannot exceed 7 days. */
    start?: string;
    /** End of the time range. ISO 8601 date, epoch time, or "now". Defaults to now. */
    end?: string;
    /** Order of the returned log lines by timestamp. The endpoint sorts the time range before it applies limit, so desc returns the newest lines of the range and asc returns the oldest. Defaults to desc. */
    order?: GetJobLogsPublicApiControllerLogsRequestOrder | (string & {});
    /** Maximum number of log lines to return. Narrow the time range or use the order parameter to reach lines outside the returned page. */
    limit?: number;
}
export declare const GetJobLogsPublicApiControllerLogsRequest: S.Codec<GetJobLogsPublicApiControllerLogsRequest>;
export type GetJobLogsPublicApiControllerLogsResponseBodyList = Array<DeploymentLogEntryPublicApiResponseDto>;
export declare const GetJobLogsPublicApiControllerLogsResponseBodyList: S.Codec<GetJobLogsPublicApiControllerLogsResponseBodyList>;
export type GetJobLogsPublicApiControllerLogsResponse = GetJobLogsPublicApiControllerLogsResponseBodyList;
export declare const GetJobLogsPublicApiControllerLogsResponse: S.Codec<GetJobLogsPublicApiControllerLogsResponse>;
export type GetJobSystemLogsPublicApiControllerLogsRequestReasonList = Array<string>;
export declare const GetJobSystemLogsPublicApiControllerLogsRequestReasonList: S.Codec<GetJobSystemLogsPublicApiControllerLogsRequestReasonList>;
export type GetJobSystemLogsPublicApiControllerLogsRequestInvolvedObjectList = Array<string>;
export declare const GetJobSystemLogsPublicApiControllerLogsRequestInvolvedObjectList: S.Codec<GetJobSystemLogsPublicApiControllerLogsRequestInvolvedObjectList>;
export type GetJobSystemLogsPublicApiControllerLogsRequestOrder = "asc" | "desc";
export declare const GetJobSystemLogsPublicApiControllerLogsRequestOrder: any;
export interface GetJobSystemLogsPublicApiControllerLogsRequest {
    /** Name of the job */
    jobName: string;
    /** Exact display reasons. An unknown reason returns no events. */
    reason?: GetJobSystemLogsPublicApiControllerLogsRequestReasonList;
    /** Exact involved object names. */
    involved_object?: GetJobSystemLogsPublicApiControllerLogsRequestInvolvedObjectList;
    /** Case-insensitive substring of the clean message, display reason and involved object. Whitespace is trimmed; blank search imposes no restriction. */
    search_text?: string;
    /** Relative window such as 15m or 1d. Maximum range is 7 days. Blank time parameters use their defaults. */
    since?: string;
    /** ISO 8601 or epoch time (s, ms, us or ns). Overrides since. Maximum range is 7 days. */
    start?: string;
    /** ISO 8601, epoch time (s, ms, us or ns), or now. */
    end?: unknown;
    /** Timestamp order of the returned entries. Ascending does not reach events the request did not read. */
    order?: GetJobSystemLogsPublicApiControllerLogsRequestOrder | (string & {});
    /** Maximum number of entries to return. There is no paging: change the time range or the filters to reach other events. */
    limit?: number;
}
export declare const GetJobSystemLogsPublicApiControllerLogsRequest: S.Codec<GetJobSystemLogsPublicApiControllerLogsRequest>;
export type GetJobSystemLogsPublicApiControllerLogsResponseBodyList = Array<SystemLogEntryPublicApiResponseDto>;
export declare const GetJobSystemLogsPublicApiControllerLogsResponseBodyList: S.Codec<GetJobSystemLogsPublicApiControllerLogsResponseBodyList>;
export type GetJobSystemLogsPublicApiControllerLogsResponse = GetJobSystemLogsPublicApiControllerLogsResponseBodyList;
export declare const GetJobSystemLogsPublicApiControllerLogsResponse: S.Codec<GetJobSystemLogsPublicApiControllerLogsResponse>;
export type GetJournalControllerComputeJournalRequestActionCode = "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
export declare const GetJournalControllerComputeJournalRequestActionCode: any;
export type GetJournalControllerComputeJournalRequestObjectType = "compute" | "volume";
export declare const GetJournalControllerComputeJournalRequestObjectType: any;
export interface GetJournalControllerComputeJournalRequest {
    computeId: string;
    /** Page number, starting from 1 */
    page?: number;
    /** Number of items per page, default 10 maximum 100 */
    pageSize?: number;
    /** Specify either compute_id or volume_id */
    compute_id?: string;
    /** Specify either volume_id or compute_id */
    volume_id?: string;
    /** Filter by action code */
    action_code?: GetJournalControllerComputeJournalRequestActionCode | (string & {});
    /** Filter by object type */
    object_type?: GetJournalControllerComputeJournalRequestObjectType | (string & {});
    /** Hydrate every event with user, instance and volume objects */
    hydrate?: boolean;
}
export declare const GetJournalControllerComputeJournalRequest: S.Codec<GetJournalControllerComputeJournalRequest>;
/** Object type that the event is related to. */
export type GetActivityJournalResponseDtoObjectType = "compute" | "volume";
export declare const GetActivityJournalResponseDtoObjectType: any;
/** Action that was performed on the object. */
export type GetActivityJournalResponseDtoActionCode = "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
export declare const GetActivityJournalResponseDtoActionCode: any;
export type ActivityVolumeDtoTemplateType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const ActivityVolumeDtoTemplateType: any;
export interface ActivityVolumeDto {
    id: string;
    name: string;
    created_at: string;
    gb: number;
    is_shared_fs: boolean;
    template_type: ActivityVolumeDtoTemplateType;
    location_code: string;
}
export declare const ActivityVolumeDto: S.Codec<ActivityVolumeDto>;
export interface ActivityComputeDto {
    id: string;
    hostname: string;
    compute_type: string;
    is_cluster: boolean;
    ip?: string | null;
    os_volume_id?: string | null;
    location_code?: string | null;
}
export declare const ActivityComputeDto: S.Codec<ActivityComputeDto>;
/** Additional properties of the event. */
export type GetActivityJournalResponseDtoPropertiesMap = {
    [key: string]: unknown | undefined;
};
export declare const GetActivityJournalResponseDtoPropertiesMap: S.Codec<GetActivityJournalResponseDtoPropertiesMap>;
export interface GetActivityJournalResponseDto {
    /** Event ID, unique within the project. Please note that it is not UUID but a combined string to identify the event. */
    id: string;
    /** ID of the object that the event is related to. */
    object_id: string;
    /** Object type that the event is related to. */
    object_type: GetActivityJournalResponseDtoObjectType;
    /** Action that was performed on the object. */
    action_code: GetActivityJournalResponseDtoActionCode;
    /** ID of the actor that performed the action. For some actions, such as spot discontinue, the actor is not available and assumed to be system. */
    actor_id?: string | null;
    /** Email of the actor that performed the action. */
    actor_email?: string | null;
    /** ID of the project that the event is related to. */
    project_id: string;
    /** When the event happened. */
    timestamp: string;
    /** Datacenter location code where the event happened or this object is located. */
    location_code: string;
    /** Origin of the request that caused the event. For example, public API, Console UI, or undefined for the internal system. */
    request_origin?: string;
    /** IP address of the request that caused the event. */
    request_ip?: string;
    /** For error events, the error message */
    error_message?: string;
    /** For some events, for example attach volume during instance provisioning, the ID of the parent event. */
    parent_id?: string;
    /** For some events, the internal service that caused the event. */
    service?: string;
    /** For cross-datacenter events, the location code of the target location. */
    target_location_code?: string;
    /** Associated volume object, if the object is a volume. */
    volume?: ActivityVolumeDto;
    /** Detailed compute object, if the object type is a compute. */
    compute?: ActivityComputeDto;
    /** For some events, the ID of the target volume. */
    target_volume_id?: string;
    /** Associated target volume object */
    target_volume?: ActivityVolumeDto | null;
    /** For some events, the ID of the target compute. */
    target_compute_id?: string;
    /** Associated target compute object */
    target_compute?: ActivityComputeDto | null;
    /** For some events, the ID of the source volume. */
    source_volume_id?: string;
    /** Associated source volume object */
    source_volume?: ActivityVolumeDto | null;
    /** For some events, the ID of the source compute. */
    source_compute_id?: string;
    /** Associated source compute object */
    source_compute?: ActivityComputeDto | null;
    /** Additional properties of the event. */
    properties?: GetActivityJournalResponseDtoPropertiesMap;
}
export declare const GetActivityJournalResponseDto: S.Codec<GetActivityJournalResponseDto>;
export type GetJournalControllerComputeJournalResponseBodyList = Array<GetActivityJournalResponseDto>;
export declare const GetJournalControllerComputeJournalResponseBodyList: S.Codec<GetJournalControllerComputeJournalResponseBodyList>;
export type GetJournalControllerComputeJournalResponse = GetJournalControllerComputeJournalResponseBodyList;
export declare const GetJournalControllerComputeJournalResponse: S.Codec<GetJournalControllerComputeJournalResponse>;
export type GetJournalControllerJournalRequestActionCode = "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
export declare const GetJournalControllerJournalRequestActionCode: any;
export type GetJournalControllerJournalRequestObjectType = "compute" | "volume";
export declare const GetJournalControllerJournalRequestObjectType: any;
export interface GetJournalControllerJournalRequest {
    /** Page number, starting from 1 */
    page?: number;
    /** Number of items per page, default 10 maximum 100 */
    pageSize?: number;
    /** Specify either compute_id or volume_id */
    compute_id?: string;
    /** Specify either volume_id or compute_id */
    volume_id?: string;
    /** Filter by action code */
    action_code?: GetJournalControllerJournalRequestActionCode | (string & {});
    /** Filter by object type */
    object_type?: GetJournalControllerJournalRequestObjectType | (string & {});
    /** Hydrate every event with user, instance and volume objects */
    hydrate?: boolean;
}
export declare const GetJournalControllerJournalRequest: S.Codec<GetJournalControllerJournalRequest>;
export type GetJournalControllerJournalResponseBodyList = Array<GetActivityJournalResponseDto>;
export declare const GetJournalControllerJournalResponseBodyList: S.Codec<GetJournalControllerJournalResponseBodyList>;
export type GetJournalControllerJournalResponse = GetJournalControllerJournalResponseBodyList;
export declare const GetJournalControllerJournalResponse: S.Codec<GetJournalControllerJournalResponse>;
export type GetJournalControllerVolumeJournalRequestActionCode = "create" | "start" | "start:complete" | "shutdown:complete" | "shutdown" | "delete" | "delete:complete" | "attach" | "attach:complete" | "detach" | "detach:complete" | "clone" | "resize" | "rename" | "restore" | "transfer" | "trash" | "trash:complete" | "configure_spot" | "cancel" | "provisioning" | "running" | "installation:failed" | "validating" | "deleting" | "error";
export declare const GetJournalControllerVolumeJournalRequestActionCode: any;
export type GetJournalControllerVolumeJournalRequestObjectType = "compute" | "volume";
export declare const GetJournalControllerVolumeJournalRequestObjectType: any;
export interface GetJournalControllerVolumeJournalRequest {
    volumeId: string;
    /** Page number, starting from 1 */
    page?: number;
    /** Number of items per page, default 10 maximum 100 */
    pageSize?: number;
    /** Specify either compute_id or volume_id */
    compute_id?: string;
    /** Specify either volume_id or compute_id */
    volume_id?: string;
    /** Filter by action code */
    action_code?: GetJournalControllerVolumeJournalRequestActionCode | (string & {});
    /** Filter by object type */
    object_type?: GetJournalControllerVolumeJournalRequestObjectType | (string & {});
    /** Hydrate every event with user, instance and volume objects */
    hydrate?: boolean;
}
export declare const GetJournalControllerVolumeJournalRequest: S.Codec<GetJournalControllerVolumeJournalRequest>;
export type GetJournalControllerVolumeJournalResponseBodyList = Array<GetActivityJournalResponseDto>;
export declare const GetJournalControllerVolumeJournalResponseBodyList: S.Codec<GetJournalControllerVolumeJournalResponseBodyList>;
export type GetJournalControllerVolumeJournalResponse = GetJournalControllerVolumeJournalResponseBodyList;
export declare const GetJournalControllerVolumeJournalResponse: S.Codec<GetJournalControllerVolumeJournalResponse>;
export interface GetLocationsControllerVolumeTypesRequest {
}
export declare const GetLocationsControllerVolumeTypesRequest: S.Codec<GetLocationsControllerVolumeTypesRequest>;
export interface Location {
    /** Datacenter location code */
    code: string;
    /** Location name */
    name: string;
    /** Country code */
    country_code: string;
}
export declare const Location: S.Codec<Location>;
export type GetLocationsControllerVolumeTypesResponseBodyList = Array<Location>;
export declare const GetLocationsControllerVolumeTypesResponseBodyList: S.Codec<GetLocationsControllerVolumeTypesResponseBodyList>;
export type GetLocationsControllerVolumeTypesResponse = GetLocationsControllerVolumeTypesResponseBodyList;
export declare const GetLocationsControllerVolumeTypesResponse: S.Codec<GetLocationsControllerVolumeTypesResponse>;
export interface GetLongTermControllerLongTermPeriodsClustersRequest {
}
export declare const GetLongTermControllerLongTermPeriodsClustersRequest: S.Codec<GetLongTermControllerLongTermPeriodsClustersRequest>;
/** Time unit name */
export type LongTermPeriodResponseDtoUnitName = "hour" | "day" | "week" | "month" | "year";
export declare const LongTermPeriodResponseDtoUnitName: any;
export interface LongTermPeriodResponseDto {
    /** Long term period code */
    code: string;
    /** Long term period name */
    name: string;
    /** Is long term period enabled */
    is_enabled: boolean;
    /** Time unit name */
    unit_name: LongTermPeriodResponseDtoUnitName;
    /** Time unit value */
    unit_value: number;
    /** Discount percentage */
    discount_percentage: number;
}
export declare const LongTermPeriodResponseDto: S.Codec<LongTermPeriodResponseDto>;
export type GetLongTermControllerLongTermPeriodsClustersResponseBodyList = Array<LongTermPeriodResponseDto>;
export declare const GetLongTermControllerLongTermPeriodsClustersResponseBodyList: S.Codec<GetLongTermControllerLongTermPeriodsClustersResponseBodyList>;
export type GetLongTermControllerLongTermPeriodsClustersResponse = GetLongTermControllerLongTermPeriodsClustersResponseBodyList;
export declare const GetLongTermControllerLongTermPeriodsClustersResponse: S.Codec<GetLongTermControllerLongTermPeriodsClustersResponse>;
export interface GetLongTermControllerLongTermPeriodsInstancesRequest {
}
export declare const GetLongTermControllerLongTermPeriodsInstancesRequest: S.Codec<GetLongTermControllerLongTermPeriodsInstancesRequest>;
export type GetLongTermControllerLongTermPeriodsInstancesResponseBodyList = Array<LongTermPeriodResponseDto>;
export declare const GetLongTermControllerLongTermPeriodsInstancesResponseBodyList: S.Codec<GetLongTermControllerLongTermPeriodsInstancesResponseBodyList>;
export type GetLongTermControllerLongTermPeriodsInstancesResponse = GetLongTermControllerLongTermPeriodsInstancesResponseBodyList;
export declare const GetLongTermControllerLongTermPeriodsInstancesResponse: S.Codec<GetLongTermControllerLongTermPeriodsInstancesResponse>;
export type GetManagedEndpointsControllerPricingRequestCurrency = "usd" | "eur";
export declare const GetManagedEndpointsControllerPricingRequestCurrency: any;
export interface GetManagedEndpointsControllerPricingRequest {
    /** Currency to get the prices in */
    currency?: GetManagedEndpointsControllerPricingRequestCurrency | (string & {});
}
export declare const GetManagedEndpointsControllerPricingRequest: S.Codec<GetManagedEndpointsControllerPricingRequest>;
/** Unit the price is charged per */
export type ManagedEndpointPriceUnitName = "generation" | "image" | "video" | "input_token" | "output_token" | "token" | "audio_second" | "video_second" | "inference_second" | "hour" | "second" | "minute" | "undefined" | "gpu_hour" | "gb_hour" | "gb_month" | "request";
export declare const ManagedEndpointPriceUnitName: any;
/** Currency type */
export type ManagedEndpointPriceCurrency = "usd" | "eur";
export declare const ManagedEndpointPriceCurrency: any;
export interface ManagedEndpointPrice {
    /** Managed endpoint / inference model identifier */
    resource: string;
    /** External managed endpoint / inference model identifier */
    external_id: string;
    /** Unit price in the requested currency */
    unit_price: number;
    /** Unit the price is charged per */
    unit_name: ManagedEndpointPriceUnitName;
    /** Currency type */
    currency: ManagedEndpointPriceCurrency;
}
export declare const ManagedEndpointPrice: S.Codec<ManagedEndpointPrice>;
export type GetManagedEndpointsControllerPricingResponseBodyList = Array<ManagedEndpointPrice>;
export declare const GetManagedEndpointsControllerPricingResponseBodyList: S.Codec<GetManagedEndpointsControllerPricingResponseBodyList>;
export type GetManagedEndpointsControllerPricingResponse = GetManagedEndpointsControllerPricingResponseBodyList;
export declare const GetManagedEndpointsControllerPricingResponse: S.Codec<GetManagedEndpointsControllerPricingResponse>;
export interface GetPublicApiControllerDeploymentEnvironmentVariablesRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const GetPublicApiControllerDeploymentEnvironmentVariablesRequest: S.Codec<GetPublicApiControllerDeploymentEnvironmentVariablesRequest>;
export type GetPublicApiControllerDeploymentEnvironmentVariablesResponseBodyList = Array<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const GetPublicApiControllerDeploymentEnvironmentVariablesResponseBodyList: S.Codec<GetPublicApiControllerDeploymentEnvironmentVariablesResponseBodyList>;
export type GetPublicApiControllerDeploymentEnvironmentVariablesResponse = GetPublicApiControllerDeploymentEnvironmentVariablesResponseBodyList;
export declare const GetPublicApiControllerDeploymentEnvironmentVariablesResponse: S.Codec<GetPublicApiControllerDeploymentEnvironmentVariablesResponse>;
export interface GetPublicApiControllerDeploymentReplicasByNameRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const GetPublicApiControllerDeploymentReplicasByNameRequest: S.Codec<GetPublicApiControllerDeploymentReplicasByNameRequest>;
/** Replica status */
export type ReplicaInfoStatus = "unavailable" | "initializing" | "running" | "terminating" | "error" | "imagepulling";
export declare const ReplicaInfoStatus: any;
export interface ReplicaInfo {
    /** Replica ID */
    id: string;
    /** Replica status */
    status: ReplicaInfoStatus;
    /** Time when the replica was started, ISO 8601 string format */
    started_at: string;
    /** Full container image reference */
    image?: string;
    /** Container image name */
    image_name?: string;
    /** Container image tag */
    image_tag?: string;
}
export declare const ReplicaInfo: S.Codec<ReplicaInfo>;
/** List of replicas for the deployment */
export type ReplicasPublicApiDtoListList = Array<ReplicaInfo>;
export declare const ReplicasPublicApiDtoListList: S.Codec<ReplicasPublicApiDtoListList>;
export interface ReplicasPublicApiDto {
    /** List of replicas for the deployment */
    list: ReplicasPublicApiDtoListList;
}
export declare const ReplicasPublicApiDto: S.Codec<ReplicasPublicApiDto>;
export interface GetPublicApiControllerFilesetSecretsRequest {
}
export declare const GetPublicApiControllerFilesetSecretsRequest: S.Codec<GetPublicApiControllerFilesetSecretsRequest>;
/** Type of the secret */
export type GetFilesetSecretsPublicApiResponseDtoSecretType = "file-secret";
export declare const GetFilesetSecretsPublicApiResponseDtoSecretType: any;
/** Names of the files contained in the fileset secret */
export type GetFilesetSecretsPublicApiResponseDtoFileNamesList = Array<string>;
export declare const GetFilesetSecretsPublicApiResponseDtoFileNamesList: S.Codec<GetFilesetSecretsPublicApiResponseDtoFileNamesList>;
export interface GetFilesetSecretsPublicApiResponseDto {
    /** Name of the secret */
    name: string;
    /** The date when the secret was created */
    created_at: string;
    /** Type of the secret */
    secret_type: GetFilesetSecretsPublicApiResponseDtoSecretType;
    /** Names of the files contained in the fileset secret */
    file_names: GetFilesetSecretsPublicApiResponseDtoFileNamesList;
}
export declare const GetFilesetSecretsPublicApiResponseDto: S.Codec<GetFilesetSecretsPublicApiResponseDto>;
export type GetPublicApiControllerFilesetSecretsResponseBodyList = Array<GetFilesetSecretsPublicApiResponseDto>;
export declare const GetPublicApiControllerFilesetSecretsResponseBodyList: S.Codec<GetPublicApiControllerFilesetSecretsResponseBodyList>;
export type GetPublicApiControllerFilesetSecretsResponse = GetPublicApiControllerFilesetSecretsResponseBodyList;
export declare const GetPublicApiControllerFilesetSecretsResponse: S.Codec<GetPublicApiControllerFilesetSecretsResponse>;
export interface GetPublicApiControllerRegistryCredentialsRequest {
}
export declare const GetPublicApiControllerRegistryCredentialsRequest: S.Codec<GetPublicApiControllerRegistryCredentialsRequest>;
export interface GetRegistryCredentialsPublicApiResponseDto {
    /** The name given to the registry credential */
    name: string;
    /** The date when the registry credential was created */
    created_at: string;
}
export declare const GetRegistryCredentialsPublicApiResponseDto: S.Codec<GetRegistryCredentialsPublicApiResponseDto>;
export type GetPublicApiControllerRegistryCredentialsResponseBodyList = Array<GetRegistryCredentialsPublicApiResponseDto>;
export declare const GetPublicApiControllerRegistryCredentialsResponseBodyList: S.Codec<GetPublicApiControllerRegistryCredentialsResponseBodyList>;
export type GetPublicApiControllerRegistryCredentialsResponse = GetPublicApiControllerRegistryCredentialsResponseBodyList;
export declare const GetPublicApiControllerRegistryCredentialsResponse: S.Codec<GetPublicApiControllerRegistryCredentialsResponse>;
export interface GetPublicApiControllerReplicasStatusByNameRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const GetPublicApiControllerReplicasStatusByNameRequest: S.Codec<GetPublicApiControllerReplicasStatusByNameRequest>;
/** Status of the deployment */
export type GetDeploymentStatusResponseDtoStatus = "initializing" | "healthy" | "degraded" | "unhealthy" | "paused" | "quota_reached" | "image_pulling" | "updating" | "terminating";
export declare const GetDeploymentStatusResponseDtoStatus: any;
export interface GetDeploymentStatusResponseDto {
    /** Status of the deployment */
    status: GetDeploymentStatusResponseDtoStatus;
}
export declare const GetDeploymentStatusResponseDto: S.Codec<GetDeploymentStatusResponseDto>;
export interface GetPublicApiControllerSecretsRequest {
}
export declare const GetPublicApiControllerSecretsRequest: S.Codec<GetPublicApiControllerSecretsRequest>;
/** Type of the secret */
export type GetSecretsPublicApiResponseDtoSecretType = "generic" | "file-secret";
export declare const GetSecretsPublicApiResponseDtoSecretType: any;
export interface GetSecretsPublicApiResponseDto {
    /** Name of the secret */
    name: string;
    /** The date when the secret was created */
    created_at: string;
    /** Type of the secret */
    secret_type: GetSecretsPublicApiResponseDtoSecretType;
}
export declare const GetSecretsPublicApiResponseDto: S.Codec<GetSecretsPublicApiResponseDto>;
export type GetPublicApiControllerSecretsResponseBodyList = Array<GetSecretsPublicApiResponseDto>;
export declare const GetPublicApiControllerSecretsResponseBodyList: S.Codec<GetPublicApiControllerSecretsResponseBodyList>;
export type GetPublicApiControllerSecretsResponse = GetPublicApiControllerSecretsResponseBodyList;
export declare const GetPublicApiControllerSecretsResponse: S.Codec<GetPublicApiControllerSecretsResponse>;
export interface GetScaledJobPublicApiControllerByNameRequest {
    /** Name of the job */
    jobName: string;
}
export declare const GetScaledJobPublicApiControllerByNameRequest: S.Codec<GetScaledJobPublicApiControllerByNameRequest>;
export interface GetScaledJobPublicApiControllerScaledJobStatusByNameRequest {
    /** Name of the job */
    jobName: string;
}
export declare const GetScaledJobPublicApiControllerScaledJobStatusByNameRequest: S.Codec<GetScaledJobPublicApiControllerScaledJobStatusByNameRequest>;
/** Status of the job deployment */
export type GetScaledJobStatusResponseDtoStatus = "paused" | "terminating" | "running" | "ready";
export declare const GetScaledJobStatusResponseDtoStatus: any;
export interface GetScaledJobStatusResponseDto {
    /** Status of the job deployment */
    status: GetScaledJobStatusResponseDtoStatus;
}
export declare const GetScaledJobStatusResponseDto: S.Codec<GetScaledJobStatusResponseDto>;
export interface GetScaledJobPublicApiControllerScalingOptionsByNameRequest {
    /** Name of the job */
    jobName: string;
}
export declare const GetScaledJobPublicApiControllerScalingOptionsByNameRequest: S.Codec<GetScaledJobPublicApiControllerScalingOptionsByNameRequest>;
export interface ScalingOptionsResponseDto {
    /** Maximum number of replicas */
    max_replica_count: number;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds: number;
    /** Duration in seconds that a job may run before the system attempts to terminate it. */
    deadline_seconds: number;
}
export declare const ScalingOptionsResponseDto: S.Codec<ScalingOptionsResponseDto>;
export interface GetScriptsControllerScriptRequest {
    scriptId: string;
}
export declare const GetScriptsControllerScriptRequest: S.Codec<GetScriptsControllerScriptRequest>;
export interface GetScriptResponseDto {
    /** Script ID */
    id: string;
    /** Script name */
    name: string;
    /** Script content */
    script: string;
    /** Script creation date */
    created_at: string;
}
export declare const GetScriptResponseDto: S.Codec<GetScriptResponseDto>;
export type GetScriptsControllerScriptsRequestOrderBy = "created_at";
export declare const GetScriptsControllerScriptsRequestOrderBy: any;
export type GetScriptsControllerScriptsRequestOrderDirection = "asc" | "desc";
export declare const GetScriptsControllerScriptsRequestOrderDirection: any;
export interface GetScriptsControllerScriptsRequest {
    /** Page number, starting from 1 */
    page?: number;
    /** Number of items per page, default 10 maximum 100 */
    pageSize?: number;
    /** Name filter. Startup scripts match by a partial name. */
    name?: string;
    /** Field to sort by. Only `created_at` is supported. */
    orderBy?: GetScriptsControllerScriptsRequestOrderBy | (string & {});
    /** Sort direction, either `asc` or `desc`. */
    orderDirection?: GetScriptsControllerScriptsRequestOrderDirection | (string & {});
}
export declare const GetScriptsControllerScriptsRequest: S.Codec<GetScriptsControllerScriptsRequest>;
export type GetScriptsControllerScriptsResponseBodyList = Array<GetScriptResponseDto>;
export declare const GetScriptsControllerScriptsResponseBodyList: S.Codec<GetScriptsControllerScriptsResponseBodyList>;
export type GetScriptsControllerScriptsResponse = GetScriptsControllerScriptsResponseBodyList;
export declare const GetScriptsControllerScriptsResponse: S.Codec<GetScriptsControllerScriptsResponse>;
export interface GetSshkeysControllerKeyRequest {
    sshKeyId: string;
}
export declare const GetSshkeysControllerKeyRequest: S.Codec<GetSshkeysControllerKeyRequest>;
export interface GetKeysResponseDto {
    /** SSH key id */
    id: string;
    /** Name of the SSH key */
    name: string;
    /** Public SSH key */
    key: string;
    /** MD5 fingerprint of the public key as colon-separated hex (matches `ssh-keygen -E md5`). `null` if the stored key cannot be parsed. */
    fingerprint: string | null;
    /** ID of the user who added this SSH key record to the project. `null` when the creator is unknown or no longer exists. */
    created_by_user_id: string | null;
}
export declare const GetKeysResponseDto: S.Codec<GetKeysResponseDto>;
export interface GetSshkeysControllerKeysRequest {
}
export declare const GetSshkeysControllerKeysRequest: S.Codec<GetSshkeysControllerKeysRequest>;
export type GetSshkeysControllerKeysResponseBodyList = Array<GetKeysResponseDto>;
export declare const GetSshkeysControllerKeysResponseBodyList: S.Codec<GetSshkeysControllerKeysResponseBodyList>;
export type GetSshkeysControllerKeysResponse = GetSshkeysControllerKeysResponseBodyList;
export declare const GetSshkeysControllerKeysResponse: S.Codec<GetSshkeysControllerKeysResponse>;
export interface GetVolumesControllerVolumeByIdRequest {
    volume_id: string;
}
export declare const GetVolumesControllerVolumeByIdRequest: S.Codec<GetVolumesControllerVolumeByIdRequest>;
/** Instance info the volume is attached to */
export type GetVolumePublicResponseDtoInstancesList = Array<string>;
export declare const GetVolumePublicResponseDtoInstancesList: S.Codec<GetVolumePublicResponseDtoInstancesList>;
/** Volume status */
export type GetVolumePublicResponseDtoStatus = "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
export declare const GetVolumePublicResponseDtoStatus: any;
/** Volume type */
export type GetVolumePublicResponseDtoType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const GetVolumePublicResponseDtoType: any;
/** Array of SSH key IDs that are linked to the volume if it is an OS volume */
export type GetVolumePublicResponseDtoSshKeyIdsList = Array<string>;
export declare const GetVolumePublicResponseDtoSshKeyIdsList: S.Codec<GetVolumePublicResponseDtoSshKeyIdsList>;
/** Volume currency */
export type GetVolumePublicResponseDtoCurrency = "usd" | "eur";
export declare const GetVolumePublicResponseDtoCurrency: any;
export type GetVolumePublicResponseDtoTagsList = Array<TagResponseDto>;
export declare const GetVolumePublicResponseDtoTagsList: S.Codec<GetVolumePublicResponseDtoTagsList>;
export interface GetVolumePublicResponseDto {
    /** Volume ID */
    id: string;
    /** Instance ID */
    instance_id: string;
    /** Instance info the volume is attached to */
    instances: GetVolumePublicResponseDtoInstancesList;
    /** Volume name */
    name: string;
    /** Volume creation date */
    created_at: string;
    created_by_user_id?: string;
    /** Volume status */
    status: GetVolumePublicResponseDtoStatus;
    /** Volume size in GB */
    size: number;
    /** Is OS volume */
    is_os_volume: boolean;
    /** Volume target */
    target: string;
    /** Volume type */
    type: GetVolumePublicResponseDtoType;
    /** Volume location */
    location: string;
    /** Array of SSH key IDs that are linked to the volume if it is an OS volume */
    ssh_key_ids: GetVolumePublicResponseDtoSshKeyIdsList;
    /** Volume pseudo path. Unique identifier for your filesystem */
    pseudo_path: string;
    /** Create directory command */
    create_directory_command: string;
    /** Mount command */
    mount_command: string;
    /** Filesystem to fstab command */
    filesystem_to_fstab_command: string;
    /** Volume contract type */
    contract: string;
    /** Volume base hourly cost */
    base_hourly_cost: number;
    /** Volume monthly price */
    monthly_price: number;
    /** Volume currency */
    currency: GetVolumePublicResponseDtoCurrency;
    /** Long term contract details */
    long_term: unknown;
    tags: GetVolumePublicResponseDtoTagsList;
}
export declare const GetVolumePublicResponseDto: S.Codec<GetVolumePublicResponseDto>;
/** Instance info the volume is attached to */
export type GetVolumeInTrashPublicResponseDtoInstancesList = Array<string>;
export declare const GetVolumeInTrashPublicResponseDtoInstancesList: S.Codec<GetVolumeInTrashPublicResponseDtoInstancesList>;
/** Volume status */
export type GetVolumeInTrashPublicResponseDtoStatus = "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
export declare const GetVolumeInTrashPublicResponseDtoStatus: any;
/** Volume type */
export type GetVolumeInTrashPublicResponseDtoType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const GetVolumeInTrashPublicResponseDtoType: any;
/** Array of SSH key IDs that are linked to the volume if it is an OS volume */
export type GetVolumeInTrashPublicResponseDtoSshKeyIdsList = Array<string>;
export declare const GetVolumeInTrashPublicResponseDtoSshKeyIdsList: S.Codec<GetVolumeInTrashPublicResponseDtoSshKeyIdsList>;
/** Volume currency */
export type GetVolumeInTrashPublicResponseDtoCurrency = "usd" | "eur";
export declare const GetVolumeInTrashPublicResponseDtoCurrency: any;
export type GetVolumeInTrashPublicResponseDtoTagsList = Array<TagResponseDto>;
export declare const GetVolumeInTrashPublicResponseDtoTagsList: S.Codec<GetVolumeInTrashPublicResponseDtoTagsList>;
export interface GetVolumeInTrashPublicResponseDto {
    /** Volume ID */
    id: string;
    /** Instance ID */
    instance_id: string;
    /** Instance info the volume is attached to */
    instances: GetVolumeInTrashPublicResponseDtoInstancesList;
    /** Volume name */
    name: string;
    /** Volume creation date */
    created_at: string;
    /** Volume status */
    status: GetVolumeInTrashPublicResponseDtoStatus;
    /** Volume size in GB */
    size: number;
    /** Is OS volume */
    is_os_volume: boolean;
    /** Volume target */
    target: string;
    /** Volume type */
    type: GetVolumeInTrashPublicResponseDtoType;
    /** Volume location */
    location: string;
    /** Array of SSH key IDs that are linked to the volume if it is an OS volume */
    ssh_key_ids: GetVolumeInTrashPublicResponseDtoSshKeyIdsList;
    /** Volume contract type */
    contract: string;
    /** Volume base hourly cost */
    base_hourly_cost: number;
    /** Volume monthly price */
    monthly_price: number;
    /** Volume currency */
    currency: GetVolumeInTrashPublicResponseDtoCurrency;
    tags: GetVolumeInTrashPublicResponseDtoTagsList;
    /** Volume deletion date */
    deleted_at: string;
    /** Is volume permanently deleted */
    is_permanently_deleted: boolean;
}
export declare const GetVolumeInTrashPublicResponseDto: S.Codec<GetVolumeInTrashPublicResponseDto>;
export type GetVolumesControllerVolumeByIdResponseBody = GetVolumePublicResponseDto | GetVolumeInTrashPublicResponseDto;
export declare const GetVolumesControllerVolumeByIdResponseBody: S.Codec<GetVolumesControllerVolumeByIdResponseBody>;
export type GetVolumesControllerVolumeByIdResponse = GetVolumesControllerVolumeByIdResponseBody;
export declare const GetVolumesControllerVolumeByIdResponse: S.Codec<GetVolumesControllerVolumeByIdResponse>;
export type GetVolumesControllerVolumesRequestStatus = "ordered" | "attached" | "attaching" | "detached" | "deleted" | "cloning" | "detaching" | "deleting" | "restoring" | "created" | "exported" | "canceled" | "canceling";
export declare const GetVolumesControllerVolumesRequestStatus: any;
export interface GetVolumesControllerVolumesRequest {
    /** Get volumes with this status. Optional */
    status?: GetVolumesControllerVolumesRequestStatus | (string & {});
}
export declare const GetVolumesControllerVolumesRequest: S.Codec<GetVolumesControllerVolumesRequest>;
export type GetVolumesControllerVolumesResponseBodyList = Array<GetVolumePublicResponseDto>;
export declare const GetVolumesControllerVolumesResponseBodyList: S.Codec<GetVolumesControllerVolumesResponseBodyList>;
export type GetVolumesControllerVolumesResponse = GetVolumesControllerVolumesResponseBodyList;
export declare const GetVolumesControllerVolumesResponse: S.Codec<GetVolumesControllerVolumesResponse>;
export interface GetVolumesControllerVolumesInTrashRequest {
}
export declare const GetVolumesControllerVolumesInTrashRequest: S.Codec<GetVolumesControllerVolumesInTrashRequest>;
export type GetVolumesControllerVolumesInTrashResponseBodyList = Array<GetVolumeInTrashPublicResponseDto>;
export declare const GetVolumesControllerVolumesInTrashResponseBodyList: S.Codec<GetVolumesControllerVolumesInTrashResponseBodyList>;
export type GetVolumesControllerVolumesInTrashResponse = GetVolumesControllerVolumesInTrashResponseBodyList;
export declare const GetVolumesControllerVolumesInTrashResponse: S.Codec<GetVolumesControllerVolumesInTrashResponse>;
export type GetVolumeTypesControllerVolumeTypesRequestCurrency = "usd" | "eur";
export declare const GetVolumeTypesControllerVolumeTypesRequestCurrency: any;
export interface GetVolumeTypesControllerVolumeTypesRequest {
    /** Currency to get the price for volume types */
    currency?: GetVolumeTypesControllerVolumeTypesRequestCurrency | (string & {});
}
export declare const GetVolumeTypesControllerVolumeTypesRequest: S.Codec<GetVolumeTypesControllerVolumeTypesRequest>;
/** Volume type */
export type VolumeTypeType = "HDD" | "NVMe" | "HDD_Shared" | "NVMe_Shared" | "NVMe_Local_Storage" | "NVMe_Shared_Cluster" | "NVMe_OS_Cluster";
export declare const VolumeTypeType: any;
export interface VolumeType {
    /** Volume type */
    type: VolumeTypeType;
    /** Price details */
    price: unknown;
    /** Is shared file system */
    is_shared_fs: boolean;
    /** Burst bandwidth */
    burst_bandwidth: number;
    /** Continuous bandwidth */
    continuous_bandwidth: number;
    /** Internal network speed */
    internal_network_speed: number;
    /** IOPS */
    iops: string;
    /** Throughput in GB/s */
    throughput_gbps: number;
}
export declare const VolumeType: S.Codec<VolumeType>;
export type GetVolumeTypesControllerVolumeTypesResponseBodyList = Array<VolumeType>;
export declare const GetVolumeTypesControllerVolumeTypesResponseBodyList: S.Codec<GetVolumeTypesControllerVolumeTypesResponseBodyList>;
export type GetVolumeTypesControllerVolumeTypesResponse = GetVolumeTypesControllerVolumeTypesResponseBodyList;
export declare const GetVolumeTypesControllerVolumeTypesResponse: S.Codec<GetVolumeTypesControllerVolumeTypesResponse>;
export type InstancesControllerPerformActionsRequestAction = "boot" | "start" | "shutdown" | "delete" | "discontinue" | "hibernate" | "configure_spot" | "force_shutdown" | "delete_stuck" | "deploy" | "transfer";
export declare const InstancesControllerPerformActionsRequestAction: any;
export type InstancesControllerPerformActionsRequestIdCase1List = Array<string>;
export declare const InstancesControllerPerformActionsRequestIdCase1List: S.Codec<InstancesControllerPerformActionsRequestIdCase1List>;
/** Instance ID or list of instance IDs */
export type InstancesControllerPerformActionsRequestId = string | InstancesControllerPerformActionsRequestIdCase1List;
export declare const InstancesControllerPerformActionsRequestId: S.Codec<InstancesControllerPerformActionsRequestId>;
/** Volume IDs to delete. Specify empty array to indicate no volumes should be deleted (previously known as "hibernate") */
export type InstancesControllerPerformActionsRequestVolumeIdsList = Array<string>;
export declare const InstancesControllerPerformActionsRequestVolumeIdsList: S.Codec<InstancesControllerPerformActionsRequestVolumeIdsList>;
export interface InstancesControllerPerformActionsRequest {
    action: InstancesControllerPerformActionsRequestAction | (string & {});
    /** Instance ID or list of instance IDs */
    id: InstancesControllerPerformActionsRequestId;
    /** Volume IDs to delete. Specify empty array to indicate no volumes should be deleted (previously known as "hibernate") */
    volume_ids?: InstancesControllerPerformActionsRequestVolumeIdsList;
    /** Delete the volumes permanently. Only applicable for delete (or discontinue) action, when volume IDs to delete are also provided. */
    delete_permanently?: boolean;
}
export declare const InstancesControllerPerformActionsRequest: S.Codec<InstancesControllerPerformActionsRequest>;
export interface InstancesControllerPerformActionsResponse {
}
export declare const InstancesControllerPerformActionsResponse: S.Codec<InstancesControllerPerformActionsResponse>;
export interface ListContainerDeploymentTemplatesPublicApiControllerTemplatesRequest {
}
export declare const ListContainerDeploymentTemplatesPublicApiControllerTemplatesRequest: S.Codec<ListContainerDeploymentTemplatesPublicApiControllerTemplatesRequest>;
/** Accepted input modalities */
export type ContainerDeploymentTemplatePublicApiDtoInputModalitiesList = Array<string>;
export declare const ContainerDeploymentTemplatePublicApiDtoInputModalitiesList: S.Codec<ContainerDeploymentTemplatePublicApiDtoInputModalitiesList>;
/** Produced output modalities */
export type ContainerDeploymentTemplatePublicApiDtoOutputModalitiesList = Array<string>;
export declare const ContainerDeploymentTemplatePublicApiDtoOutputModalitiesList: S.Codec<ContainerDeploymentTemplatePublicApiDtoOutputModalitiesList>;
/** Coarse task labels */
export type ContainerDeploymentTemplatePublicApiDtoTasksList = Array<string>;
export declare const ContainerDeploymentTemplatePublicApiDtoTasksList: S.Codec<ContainerDeploymentTemplatePublicApiDtoTasksList>;
export interface ContainerDeploymentTemplatePublicApiDto {
    /** Stable, URL-safe template identifier used in template paths */
    id: string;
    /** Human-readable name of the model */
    name: string;
    /** Description of the model */
    description: string;
    /** Provider of the model */
    provider: string;
    /** Serving engine used by the template */
    engine: string;
    /** Hugging Face repository the default variant loads */
    model_repository: string;
    /** Parameter count of the model (display string) */
    parameters: string;
    /** Maximum context length in tokens */
    context_length: number;
    /** Accepted input modalities */
    input_modalities: ContainerDeploymentTemplatePublicApiDtoInputModalitiesList;
    /** Produced output modalities */
    output_modalities: ContainerDeploymentTemplatePublicApiDtoOutputModalitiesList;
    /** Coarse task labels */
    tasks: ContainerDeploymentTemplatePublicApiDtoTasksList;
    /** Whether a Hugging Face token is required to deploy the model (gated checkpoint) */
    requires_hugging_face_token: boolean;
    /** Minimum total GPU memory in GB for the default variant */
    min_vram_gb: number;
    /** Smallest compute configuration currently offered that fits the default variant. Null when nothing offered fits */
    recommended_compute: ComputeResource | null;
}
export declare const ContainerDeploymentTemplatePublicApiDto: S.Codec<ContainerDeploymentTemplatePublicApiDto>;
export type ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponseBodyList = Array<ContainerDeploymentTemplatePublicApiDto>;
export declare const ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponseBodyList: S.Codec<ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponseBodyList>;
export type ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponse = ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponseBodyList;
export declare const ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponse: S.Codec<ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponse>;
export interface ListDeploymentsRequest {
}
export declare const ListDeploymentsRequest: S.Codec<ListDeploymentsRequest>;
export type ListDeploymentsResponseBodyList = Array<DeploymentPublicApiResponseDto>;
export declare const ListDeploymentsResponseBodyList: S.Codec<ListDeploymentsResponseBodyList>;
export type ListDeploymentsResponse = ListDeploymentsResponseBodyList;
export declare const ListDeploymentsResponse: S.Codec<ListDeploymentsResponse>;
export interface ListInstanceGroupsPublicControllerRequest {
}
export declare const ListInstanceGroupsPublicControllerRequest: S.Codec<ListInstanceGroupsPublicControllerRequest>;
export type ListInstanceGroupsPublicControllerResponseBodyList = Array<InstanceGroupResponseDto>;
export declare const ListInstanceGroupsPublicControllerResponseBodyList: S.Codec<ListInstanceGroupsPublicControllerResponseBodyList>;
export type ListInstanceGroupsPublicControllerResponse = ListInstanceGroupsPublicControllerResponseBodyList;
export declare const ListInstanceGroupsPublicControllerResponse: S.Codec<ListInstanceGroupsPublicControllerResponse>;
export interface PausePublicApiControllerDeploymentByNameRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const PausePublicApiControllerDeploymentByNameRequest: S.Codec<PausePublicApiControllerDeploymentByNameRequest>;
export interface PausePublicApiControllerDeploymentByNameResponse {
}
export declare const PausePublicApiControllerDeploymentByNameResponse: S.Codec<PausePublicApiControllerDeploymentByNameResponse>;
export interface PauseScaledJobPublicApiControllerScaledJobByNameRequest {
    /** Name of the job */
    jobName: string;
}
export declare const PauseScaledJobPublicApiControllerScaledJobByNameRequest: S.Codec<PauseScaledJobPublicApiControllerScaledJobByNameRequest>;
export interface PauseScaledJobPublicApiControllerScaledJobByNameResponse {
}
export declare const PauseScaledJobPublicApiControllerScaledJobByNameResponse: S.Codec<PauseScaledJobPublicApiControllerScaledJobByNameResponse>;
export interface PublicApiControllerGetComputeAndAvailabilityRequest {
}
export declare const PublicApiControllerGetComputeAndAvailabilityRequest: S.Codec<PublicApiControllerGetComputeAndAvailabilityRequest>;
export interface GetComputeResourcesPublicApiResponseDto {
    /** Name of the compute resource */
    name: string;
    /** Number of compute units (e.g. 4 GPUs). Default is 1 */
    size: number;
    /** Is the compute resource available */
    is_available: boolean;
}
export declare const GetComputeResourcesPublicApiResponseDto: S.Codec<GetComputeResourcesPublicApiResponseDto>;
export type PublicApiControllerGetComputeAndAvailabilityResponseBodyList = Array<GetComputeResourcesPublicApiResponseDto>;
export declare const PublicApiControllerGetComputeAndAvailabilityResponseBodyList: S.Codec<PublicApiControllerGetComputeAndAvailabilityResponseBodyList>;
export type PublicApiControllerGetComputeAndAvailabilityResponse = PublicApiControllerGetComputeAndAvailabilityResponseBodyList;
export declare const PublicApiControllerGetComputeAndAvailabilityResponse: S.Codec<PublicApiControllerGetComputeAndAvailabilityResponse>;
export interface PurgePublicApiControllerQueueRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const PurgePublicApiControllerQueueRequest: S.Codec<PurgePublicApiControllerQueueRequest>;
export interface PurgePublicApiControllerQueueResponse {
}
export declare const PurgePublicApiControllerQueueResponse: S.Codec<PurgePublicApiControllerQueueResponse>;
export interface PurgeScaledJobPublicApiControllerQueueRequest {
    /** Name of the job */
    jobName: string;
}
export declare const PurgeScaledJobPublicApiControllerQueueRequest: S.Codec<PurgeScaledJobPublicApiControllerQueueRequest>;
export interface PurgeScaledJobPublicApiControllerQueueResponse {
}
export declare const PurgeScaledJobPublicApiControllerQueueResponse: S.Codec<PurgeScaledJobPublicApiControllerQueueResponse>;
export interface RemoveInstanceGroupsPublicControllerRequest {
    instance_group_id: string;
}
export declare const RemoveInstanceGroupsPublicControllerRequest: S.Codec<RemoveInstanceGroupsPublicControllerRequest>;
export interface RemoveInstanceGroupsPublicControllerResponse {
}
export declare const RemoveInstanceGroupsPublicControllerResponse: S.Codec<RemoveInstanceGroupsPublicControllerResponse>;
export interface RestartPublicApiControllerDeploymentByNameRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const RestartPublicApiControllerDeploymentByNameRequest: S.Codec<RestartPublicApiControllerDeploymentByNameRequest>;
export interface RestartPublicApiControllerDeploymentByNameResponse {
}
export declare const RestartPublicApiControllerDeploymentByNameResponse: S.Codec<RestartPublicApiControllerDeploymentByNameResponse>;
export interface ResumePublicApiControllerDeploymentByNameRequest {
    /** Name of the deployment */
    deployment_name: string;
}
export declare const ResumePublicApiControllerDeploymentByNameRequest: S.Codec<ResumePublicApiControllerDeploymentByNameRequest>;
export interface ResumePublicApiControllerDeploymentByNameResponse {
}
export declare const ResumePublicApiControllerDeploymentByNameResponse: S.Codec<ResumePublicApiControllerDeploymentByNameResponse>;
export interface ResumeScaledJobPublicApiControllerScaledJobByNameRequest {
    /** Name of the job */
    jobName: string;
}
export declare const ResumeScaledJobPublicApiControllerScaledJobByNameRequest: S.Codec<ResumeScaledJobPublicApiControllerScaledJobByNameRequest>;
export interface ResumeScaledJobPublicApiControllerScaledJobByNameResponse {
}
export declare const ResumeScaledJobPublicApiControllerScaledJobByNameResponse: S.Codec<ResumeScaledJobPublicApiControllerScaledJobByNameResponse>;
export interface ScaledJobPublicApiControllerGetListRequest {
}
export declare const ScaledJobPublicApiControllerGetListRequest: S.Codec<ScaledJobPublicApiControllerGetListRequest>;
export interface ScaledJobShortInfoResponseDto {
    /** Job deployment name */
    name: string;
    created_at: string;
    /** ID of the user who created the job */
    created_by_user_id: string;
    /** Compute resource details */
    compute: ComputeResource;
}
export declare const ScaledJobShortInfoResponseDto: S.Codec<ScaledJobShortInfoResponseDto>;
export type ScaledJobPublicApiControllerGetListResponseBodyList = Array<ScaledJobShortInfoResponseDto>;
export declare const ScaledJobPublicApiControllerGetListResponseBodyList: S.Codec<ScaledJobPublicApiControllerGetListResponseBodyList>;
export type ScaledJobPublicApiControllerGetListResponse = ScaledJobPublicApiControllerGetListResponseBodyList;
export declare const ScaledJobPublicApiControllerGetListResponse: S.Codec<ScaledJobPublicApiControllerGetListResponse>;
/** Environment variables for the container */
export type PatchContainerPublicApiDtoEnvList = Array<EnvVarPublicApi>;
export declare const PatchContainerPublicApiDtoEnvList: S.Codec<PatchContainerPublicApiDtoEnvList>;
/** Autoupdate mode for the container */
export type AutoupdateSettingsMode = "latest" | "semantic";
export declare const AutoupdateSettingsMode: any;
export interface AutoupdateSettings {
    /** Is autoupdate enabled for the container */
    enabled: boolean;
    /** Autoupdate mode for the container */
    mode: AutoupdateSettingsMode | (string & {});
    /** Tag filter for the autoupdate. Supports regex */
    tag_filter?: string;
}
export declare const AutoupdateSettings: S.Codec<AutoupdateSettings>;
export type PatchContainerPublicApiDtoVolumeMountsItem = ScratchVolumeMountDto | SecretVolumeMountDto | SharedVolumeMountDto | MemoryVolumeMountDto;
export declare const PatchContainerPublicApiDtoVolumeMountsItem: S.Codec<PatchContainerPublicApiDtoVolumeMountsItem>;
/** Volume mounts for the container */
export type PatchContainerPublicApiDtoVolumeMountsList = Array<PatchContainerPublicApiDtoVolumeMountsItem>;
export declare const PatchContainerPublicApiDtoVolumeMountsList: S.Codec<PatchContainerPublicApiDtoVolumeMountsList>;
export interface PatchContainerPublicApiDto {
    /** Name of the container to update */
    name: string;
    /** Image to be deployed in the container */
    image?: string;
    /** Pull the image through the platform image cache. Applies only to public Docker Hub images. Has no effect for images from other registries, or when registry credentials are set. When the cache is used, registry credentials are not needed to avoid Docker Hub rate limits, because the cache pulls with a platform account. Without the cache, this does not apply. If `image` is not sent, the setting applies to the current image. If `image` is sent without this field, the current setting is kept. */
    should_use_cached_image?: boolean;
    /** Port to be exposed by the container */
    exposed_port?: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettings;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: EntrypointOverridesSettings;
    /** Environment variables for the container */
    env?: PatchContainerPublicApiDtoEnvList;
    /** Container image autoupdate settings for the container */
    autoupdate?: AutoupdateSettings;
    /** Volume mounts for the container */
    volume_mounts?: PatchContainerPublicApiDtoVolumeMountsList;
}
export declare const PatchContainerPublicApiDto: S.Codec<PatchContainerPublicApiDto>;
/** Containers properties to be updated */
export type UpdateDeploymentRequestContainersList = Array<PatchContainerPublicApiDto>;
export declare const UpdateDeploymentRequestContainersList: S.Codec<UpdateDeploymentRequestContainersList>;
export interface UpdateDeploymentRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Container registry settings. Private registries require saving the credentials via datacrunch cloud UI */
    container_registry_settings?: ContainerRegistrySettingsPublicApiDto;
    /** Containers properties to be updated */
    containers?: UpdateDeploymentRequestContainersList;
    /** Change compute settings for the deployment */
    compute?: ComputeResource;
    /** Spot instance settings for the deployment */
    is_spot?: boolean;
}
export declare const UpdateDeploymentRequest: S.Codec<UpdateDeploymentRequest>;
export interface UpdateDeploymentScalingRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Minimum number of replicas */
    min_replica_count?: number;
    /** Maximum number of replicas */
    max_replica_count?: number;
    /** Policy for scaling down replicas */
    scale_down_policy?: ScalingPolicy;
    /** Policy for scaling up replicas */
    scale_up_policy?: ScalingPolicy;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds?: number;
    /** Number of requests each replica can process concurrently. */
    concurrent_requests_per_replica?: number;
    /** Triggers for scaling up and down */
    scaling_triggers?: PatchScalingTriggers;
}
export declare const UpdateDeploymentScalingRequest: S.Codec<UpdateDeploymentScalingRequest>;
export type MutableInstanceGroupTemplateDtoSshKeyIdsList = Array<string>;
export declare const MutableInstanceGroupTemplateDtoSshKeyIdsList: S.Codec<MutableInstanceGroupTemplateDtoSshKeyIdsList>;
export interface MutableInstanceGroupTemplateDto {
    ssh_key_ids?: MutableInstanceGroupTemplateDtoSshKeyIdsList;
    startup_script_id?: string | null;
}
export declare const MutableInstanceGroupTemplateDto: S.Codec<MutableInstanceGroupTemplateDto>;
export interface UpdateInstanceGroupsPublicControllerRequest {
    instance_group_id: string;
    name?: string;
    description?: string | null;
    /** Mutable template defaults. */
    template?: MutableInstanceGroupTemplateDto;
}
export declare const UpdateInstanceGroupsPublicControllerRequest: S.Codec<UpdateInstanceGroupsPublicControllerRequest>;
/** Environment variables for the container */
export type UpdatePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList = Array<EnvVarPublicApi>;
export declare const UpdatePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList: S.Codec<UpdatePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList>;
export interface UpdatePublicApiControllerEnvironmentVariablesOfContainerRequest {
    /** Name of the deployment */
    deployment_name: string;
    /** Container name */
    container_name: string;
    /** Environment variables for the container */
    env: UpdatePublicApiControllerEnvironmentVariablesOfContainerRequestEnvList;
}
export declare const UpdatePublicApiControllerEnvironmentVariablesOfContainerRequest: S.Codec<UpdatePublicApiControllerEnvironmentVariablesOfContainerRequest>;
export type UpdatePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList = Array<GetDeploymentEnvVariablesPublicApiResponseDto>;
export declare const UpdatePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList: S.Codec<UpdatePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList>;
export type UpdatePublicApiControllerEnvironmentVariablesOfContainerResponse = UpdatePublicApiControllerEnvironmentVariablesOfContainerResponseBodyList;
export declare const UpdatePublicApiControllerEnvironmentVariablesOfContainerResponse: S.Codec<UpdatePublicApiControllerEnvironmentVariablesOfContainerResponse>;
/** Environment variables for the container */
export type PatchScaledJobContainerDtoEnvList = Array<CreateScaledJobContainerEnvVar>;
export declare const PatchScaledJobContainerDtoEnvList: S.Codec<PatchScaledJobContainerDtoEnvList>;
/** Volume mounts for the container */
export type PatchScaledJobContainerDtoVolumeMountsList = Array<CreateScaledJobContainerVolumeMount>;
export declare const PatchScaledJobContainerDtoVolumeMountsList: S.Codec<PatchScaledJobContainerDtoVolumeMountsList>;
export interface PatchScaledJobContainerDto {
    /** Image to be deployed in the container */
    image?: string;
    /** Pull the image through the platform image cache. Applies only to public Docker Hub images. Has no effect for images from other registries, or when registry credentials are set. When the cache is used, registry credentials are not needed to avoid Docker Hub rate limits, because the cache pulls with a platform account. Without the cache, this does not apply. If `image` is not sent, the setting applies to the current image. If `image` is sent without this field, the current setting is kept. */
    should_use_cached_image?: boolean;
    /** Port to be exposed by the container */
    exposed_port?: number;
    /** Healthcheck settings for the container */
    healthcheck?: HealthcheckSettings;
    /** Entrypoint overrides settings for the container */
    entrypoint_overrides?: CreateScaledJobContainerEntrypointOverridesSettings;
    /** Environment variables for the container */
    env?: PatchScaledJobContainerDtoEnvList;
    /** Volume mounts for the container */
    volume_mounts?: PatchScaledJobContainerDtoVolumeMountsList;
    /** Name of the container to update */
    name: string;
}
export declare const PatchScaledJobContainerDto: S.Codec<PatchScaledJobContainerDto>;
/** Containers properties to be updated */
export type UpdateScaledJobPublicApiControllerScaledJobByNameRequestContainersList = Array<PatchScaledJobContainerDto>;
export declare const UpdateScaledJobPublicApiControllerScaledJobByNameRequestContainersList: S.Codec<UpdateScaledJobPublicApiControllerScaledJobByNameRequestContainersList>;
export interface PatchScaledJobScalingOptionsDto {
    /** Maximum number of replicas */
    max_replica_count?: number;
    /** Duration in seconds after which messages in the queue will be dropped */
    queue_message_ttl_seconds?: number;
    /** Duration in seconds that a job may run before the system attempts to terminate it. */
    deadline_seconds?: number;
}
export declare const PatchScaledJobScalingOptionsDto: S.Codec<PatchScaledJobScalingOptionsDto>;
export interface UpdateScaledJobPublicApiControllerScaledJobByNameRequest {
    /** Name of the job */
    jobName: string;
    /** Container registry settings */
    container_registry_settings?: CreateScaledJobContainerRegistrySettings;
    /** Containers properties to be updated */
    containers?: UpdateScaledJobPublicApiControllerScaledJobByNameRequestContainersList;
    /** Compute settings for the job deployment */
    compute?: ComputeResource;
    /** Scaling settings for the job deployment */
    scaling?: PatchScaledJobScalingOptionsDto;
}
export declare const UpdateScaledJobPublicApiControllerScaledJobByNameRequest: S.Codec<UpdateScaledJobPublicApiControllerScaledJobByNameRequest>;
/** Action to perform on the volume(s) The `clone` action returns its destination volume ID: `{"id":"..."}`. Send a `cancel` action with that same ID to interrupt a cross-datacenter clone. */
export type VolumesControllerPerformActionsRequestAction = "attach" | "detach" | "delete" | "rename" | "resize" | "restore" | "clone" | "cancel" | "create" | "export" | "transfer";
export declare const VolumesControllerPerformActionsRequestAction: any;
export type VolumesControllerPerformActionsRequestIdCase1List = Array<string>;
export declare const VolumesControllerPerformActionsRequestIdCase1List: S.Codec<VolumesControllerPerformActionsRequestIdCase1List>;
/** Volume ID(s) to perform the action on. Single volume id or an array of volume ids */
export type VolumesControllerPerformActionsRequestId = string | VolumesControllerPerformActionsRequestIdCase1List;
export declare const VolumesControllerPerformActionsRequestId: S.Codec<VolumesControllerPerformActionsRequestId>;
/** Array of instance IDs to attach the volume to, if the action is attach */
export type VolumesControllerPerformActionsRequestInstanceIdsList = Array<string>;
export declare const VolumesControllerPerformActionsRequestInstanceIdsList: S.Codec<VolumesControllerPerformActionsRequestInstanceIdsList>;
export interface VolumesControllerPerformActionsRequest {
    /** Action to perform on the volume(s) The `clone` action returns its destination volume ID: `{"id":"..."}`. Send a `cancel` action with that same ID to interrupt a cross-datacenter clone. */
    action: VolumesControllerPerformActionsRequestAction | (string & {});
    /** Volume ID(s) to perform the action on. Single volume id or an array of volume ids */
    id: VolumesControllerPerformActionsRequestId;
    /** New volume size in GB. Can't be lower than current size */
    size?: number;
    /** Instance ID to attach the volume to, if the action is attach */
    instance_id?: string;
    /** Array of instance IDs to attach the volume to, if the action is attach */
    instance_ids?: VolumesControllerPerformActionsRequestInstanceIdsList;
    /** New volume name */
    name?: string;
    /** Target volume type */
    type?: string;
    /** If deleting volume(s), delete them permanently */
    is_permanent?: boolean;
    /** Target location code if cloning the volume */
    location_code?: string;
}
export declare const VolumesControllerPerformActionsRequest: S.Codec<VolumesControllerPerformActionsRequest>;
export interface VolumesControllerPerformActionsResponse {
}
export declare const VolumesControllerPerformActionsResponse: S.Codec<VolumesControllerPerformActionsResponse>;
export type AddClustersControllerTagError = Forbidden | Conflict | VerdaOpError;
/** Add a tag to a cluster Add one key-value tag. Maximum 10 tags per cluster. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this cluster returns 409. */
export declare const addClustersControllerTag: API.OperationMethod<AddClustersControllerTagRequest, TagResponseDto, AddClustersControllerTagError, VerdaOpContext>;
export type AddInstancesControllerTagError = Forbidden | Conflict | VerdaOpError;
/** Add a tag to an instance Add one key-value tag. Maximum 10 tags per instance. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this instance returns 409. */
export declare const addInstancesControllerTag: API.OperationMethod<AddInstancesControllerTagRequest, TagResponseDto, AddInstancesControllerTagError, VerdaOpContext>;
export type AddPublicApiControllerEnvironmentVariablesToContainerError = VerdaOpError;
/** Add environment variables to a container */
export declare const addPublicApiControllerEnvironmentVariablesToContainer: API.OperationMethod<AddPublicApiControllerEnvironmentVariablesToContainerRequest, AddPublicApiControllerEnvironmentVariablesToContainerResponse, AddPublicApiControllerEnvironmentVariablesToContainerError, VerdaOpContext>;
export type AddPublicApiControllerFilesetSecretError = VerdaOpError;
/** Create new fileset secret File secrets can be used as a secret mount storage */
export declare const addPublicApiControllerFilesetSecret: API.OperationMethod<AddPublicApiControllerFilesetSecretRequest, AddPublicApiControllerFilesetSecretResponse, AddPublicApiControllerFilesetSecretError, VerdaOpContext>;
export type AddPublicApiControllerRegistryCredentialsError = VerdaOpError;
/** Add registry credentials */
export declare const addPublicApiControllerRegistryCredentials: API.OperationMethod<AddPublicApiControllerRegistryCredentialsRequest, AddPublicApiControllerRegistryCredentialsResponse, AddPublicApiControllerRegistryCredentialsError, VerdaOpContext>;
export type AddPublicApiControllerSecretError = VerdaOpError;
/** Create new secret */
export declare const addPublicApiControllerSecret: API.OperationMethod<AddPublicApiControllerSecretRequest, AddPublicApiControllerSecretResponse, AddPublicApiControllerSecretError, VerdaOpContext>;
export type AddScriptsControllerScriptError = VerdaOpError;
/** Add new startup script */
export declare const addScriptsControllerScript: API.OperationMethod<AddScriptsControllerScriptRequest, AddScriptsControllerScriptResponse, AddScriptsControllerScriptError, VerdaOpContext>;
export type AddSshkeysControllerKeyError = VerdaOpError;
/** Add new SSH key */
export declare const addSshkeysControllerKey: API.OperationMethod<AddSshkeysControllerKeyRequest, AddSshkeysControllerKeyResponse, AddSshkeysControllerKeyError, VerdaOpContext>;
export type AddVolumesControllerTagError = Forbidden | Conflict | VerdaOpError;
/** Add a tag to a volume Add one key-value tag. Maximum 10 tags per volume. Omit `value` for a freeform tag. Keys are lowercased. A matching project tag is reused; adding one already linked to this volume returns 409. */
export declare const addVolumesControllerTag: API.OperationMethod<AddVolumesControllerTagRequest, TagResponseDto, AddVolumesControllerTagError, VerdaOpContext>;
export type CheckClusterAvailabilityControllerAvailabilityError = VerdaOpError;
/** Get specific cluster type availability */
export declare const checkClusterAvailabilityControllerAvailability: API.OperationMethod<CheckClusterAvailabilityControllerAvailabilityRequest, CheckClusterAvailabilityControllerAvailabilityResponse, CheckClusterAvailabilityControllerAvailabilityError, VerdaOpContext>;
export type CheckInstanceAvailabilityControllerAvailabilityError = VerdaOpError;
/** Get instance type availability */
export declare const checkInstanceAvailabilityControllerAvailability: API.OperationMethod<CheckInstanceAvailabilityControllerAvailabilityRequest, CheckInstanceAvailabilityControllerAvailabilityResponse, CheckInstanceAvailabilityControllerAvailabilityError, VerdaOpContext>;
export type ClustersControllerPerformActionsError = VerdaOpError;
/** Perform action on clusters Perform actions on one or more clusters. Note: Only `discontinue` action is allowed for clusters. **Important**: Local OS storage will be deleted. Shared volumes will be detached and should be deleted manually. */
export declare const clustersControllerPerformActions: API.OperationMethod<ClustersControllerPerformActionsRequest, ClustersControllerPerformActionsResponse, ClustersControllerPerformActionsError, VerdaOpContext>;
export type ClustersControllerPerformClusterNodeActionError = BadRequest | NotFound | VerdaOpError;
/** Perform action on a cluster node Start or shut down a single node inside a cluster (worker, jumphost, or CPU service node). Supported `action` values: - `boot` — start the node - `shutdown` — graceful shutdown - `force_shutdown` — force the node off */
export declare const clustersControllerPerformClusterNodeAction: API.OperationMethod<ClustersControllerPerformClusterNodeActionRequest, ClustersControllerPerformClusterNodeActionResponse, ClustersControllerPerformClusterNodeActionError, VerdaOpContext>;
export type CreateDeploymentError = VerdaOpError;
/** Create new deployment */
export declare const createDeployment: API.OperationMethod<CreateDeploymentRequest, DeploymentPublicApiResponseDto, CreateDeploymentError, VerdaOpContext>;
export type CreateInstanceGroupsPublicControllerError = VerdaOpError;
/** Create an instance group Creates a project-scoped group with a name, description, location, instance type and template. */
export declare const createInstanceGroupsPublicController: API.OperationMethod<CreateInstanceGroupsPublicControllerRequest, InstanceGroupResponseDto, CreateInstanceGroupsPublicControllerError, VerdaOpContext>;
export type CreateScaledJobPublicApiControllerNewScaledJobError = VerdaOpError;
/** Create new job */
export declare const createScaledJobPublicApiControllerNewScaledJob: API.OperationMethod<CreateScaledJobPublicApiControllerNewScaledJobRequest, ScaledJobResponseDto, CreateScaledJobPublicApiControllerNewScaledJobError, VerdaOpContext>;
export type CreateVolumesControllerVolumeError = Forbidden | VerdaOpError;
/** Create volume */
export declare const createVolumesControllerVolume: API.OperationMethod<CreateVolumesControllerVolumeRequest, CreateVolumesControllerVolumeResponse, CreateVolumesControllerVolumeError, VerdaOpContext>;
export type DeleteClustersControllerTagError = Forbidden | NotFound | VerdaOpError;
/** Remove a tag from a cluster */
export declare const deleteClustersControllerTag: API.OperationMethod<DeleteClustersControllerTagRequest, DeleteClustersControllerTagResponse, DeleteClustersControllerTagError, VerdaOpContext>;
export type DeleteDeploymentError = VerdaOpError;
/** Delete deployment */
export declare const deleteDeployment: API.OperationMethod<DeleteDeploymentRequest, DeleteDeploymentResponse, DeleteDeploymentError, VerdaOpContext>;
export type DeleteInstancesControllerTagError = Forbidden | NotFound | VerdaOpError;
/** Remove a tag from an instance */
export declare const deleteInstancesControllerTag: API.OperationMethod<DeleteInstancesControllerTagRequest, DeleteInstancesControllerTagResponse, DeleteInstancesControllerTagError, VerdaOpContext>;
export type DeletePublicApiControllerEnvironmentVariablesOfContainerError = VerdaOpError;
/** Delete environment variables of a container */
export declare const deletePublicApiControllerEnvironmentVariablesOfContainer: API.OperationMethod<DeletePublicApiControllerEnvironmentVariablesOfContainerRequest, DeletePublicApiControllerEnvironmentVariablesOfContainerResponse, DeletePublicApiControllerEnvironmentVariablesOfContainerError, VerdaOpContext>;
export type DeletePublicApiControllerFilesetSecretError = VerdaOpError;
/** Delete fileset secret Will error if the secret is used in a deployment */
export declare const deletePublicApiControllerFilesetSecret: API.OperationMethod<DeletePublicApiControllerFilesetSecretRequest, DeletePublicApiControllerFilesetSecretResponse, DeletePublicApiControllerFilesetSecretError, VerdaOpContext>;
export type DeletePublicApiControllerRegistryCredentialsError = VerdaOpError;
/** Delete registry credentials */
export declare const deletePublicApiControllerRegistryCredentials: API.OperationMethod<DeletePublicApiControllerRegistryCredentialsRequest, DeletePublicApiControllerRegistryCredentialsResponse, DeletePublicApiControllerRegistryCredentialsError, VerdaOpContext>;
export type DeletePublicApiControllerSecretError = VerdaOpError;
/** Delete secret Will error if the secret is used in a deployment */
export declare const deletePublicApiControllerSecret: API.OperationMethod<DeletePublicApiControllerSecretRequest, DeletePublicApiControllerSecretResponse, DeletePublicApiControllerSecretError, VerdaOpContext>;
export type DeleteScaledJobPublicApiControllerByNameError = VerdaOpError;
/** Delete job deployment */
export declare const deleteScaledJobPublicApiControllerByName: API.OperationMethod<DeleteScaledJobPublicApiControllerByNameRequest, DeleteScaledJobPublicApiControllerByNameResponse, DeleteScaledJobPublicApiControllerByNameError, VerdaOpContext>;
export type DeleteScriptsControllerKeyError = VerdaOpError;
/** Delete single startup script by ID */
export declare const deleteScriptsControllerKey: API.OperationMethod<DeleteScriptsControllerKeyRequest, DeleteScriptsControllerKeyResponse, DeleteScriptsControllerKeyError, VerdaOpContext>;
export type DeleteScriptsControllerScriptsError = VerdaOpError;
/** Delete startup scripts */
export declare const deleteScriptsControllerScripts: API.OperationMethod<DeleteScriptsControllerScriptsRequest, DeleteScriptsControllerScriptsResponse, DeleteScriptsControllerScriptsError, VerdaOpContext>;
export type DeleteSshkeysControllerKeyError = VerdaOpError;
/** Delete single SSH key by ID */
export declare const deleteSshkeysControllerKey: API.OperationMethod<DeleteSshkeysControllerKeyRequest, DeleteSshkeysControllerKeyResponse, DeleteSshkeysControllerKeyError, VerdaOpContext>;
export type DeleteSshkeysControllerKeysError = VerdaOpError;
/** Delete ssh keys */
export declare const deleteSshkeysControllerKeys: API.OperationMethod<DeleteSshkeysControllerKeysRequest, DeleteSshkeysControllerKeysResponse, DeleteSshkeysControllerKeysError, VerdaOpContext>;
export type DeleteVolumesControllerTagError = Forbidden | NotFound | VerdaOpError;
/** Remove a tag from a volume */
export declare const deleteVolumesControllerTag: API.OperationMethod<DeleteVolumesControllerTagRequest, DeleteVolumesControllerTagResponse, DeleteVolumesControllerTagError, VerdaOpContext>;
export type DeleteVolumesControllerVolumeByIdError = VerdaOpError;
/** Delete volume by id */
export declare const deleteVolumesControllerVolumeById: API.OperationMethod<DeleteVolumesControllerVolumeByIdRequest, DeleteVolumesControllerVolumeByIdResponse, DeleteVolumesControllerVolumeByIdError, VerdaOpContext>;
export type DeployClustersControllerClusterError = VerdaOpError;
/** Deploy cluster Deploy a new cluster. Before deploying add at least one SSH key to enable access to your cluster. Cluster types can be listed using the `GET /v1/cluster-types` endpoint. Image types can be listed using the `GET /v1/images/cluster` endpoint. */
export declare const deployClustersControllerCluster: API.OperationMethod<DeployClustersControllerClusterRequest, DeployClustersControllerClusterResponse, DeployClustersControllerClusterError, VerdaOpContext>;
export type DeployContainerDeploymentTemplatesPublicApiControllerTemplateError = VerdaOpError;
/** Deploy a container deployment template */
export declare const deployContainerDeploymentTemplatesPublicApiControllerTemplate: API.OperationMethod<DeployContainerDeploymentTemplatesPublicApiControllerTemplateRequest, DeploymentPublicApiResponseDto, DeployContainerDeploymentTemplatesPublicApiControllerTemplateError, VerdaOpContext>;
export type DeployInstancesControllerInstanceError = VerdaOpError;
/** Deploy instance Deploy a new instance. Before deploying an instance, you need to add at least ssh key to be able to access your instance. Instance types can be listed using the `GET /instance-types` endpoint. Available images can be listed using the `GET /images` endpoint, using the `image_type` value from the result. Existing detached OS volumes could be used as an image, put the volume ID as the `image` value. It's also possible to define new volumes that will be created and attached to the new instance. New volumes location will be the same as the instance. Existing detached volumes can be attached to the deployed instance by adding their IDs to the `existing_volumes` property. */
export declare const deployInstancesControllerInstance: API.OperationMethod<DeployInstancesControllerInstanceRequest, DeployInstancesControllerInstanceResponse, DeployInstancesControllerInstanceError, VerdaOpContext>;
export type DownloadAuditLogControllerAuditLogError = Forbidden | VerdaOpError;
/** Export project audit log as a JSON file Streams the full audit log (matching the given filters, within the retention window) to object storage and returns a short-lived pre-signed download URL. */
export declare const downloadAuditLogControllerAuditLog: API.OperationMethod<DownloadAuditLogControllerAuditLogRequest, DownloadAuditLogResponseDto, DownloadAuditLogControllerAuditLogError, VerdaOpContext>;
export type GetAccessTokenError = BadRequest | VerdaOpError;
/** Get access token Get access token for public API using client credentials or refresh token.You can manage your credentials at https://console.verda.com, under the **Keys** => **Cloud API credentials** section. */
export declare const getAccessToken: API.OperationMethod<GetAccessTokenRequest, GetAccessTokenResponseDto, GetAccessTokenError, VerdaOpContext>;
export type GetAuditLogControllerAuditLogError = Forbidden | VerdaOpError;
/** Retrieve audit log for the project Retrieves all events for the project, for all resources matching the filter criteria. The format to generate audit log is based on [CloudEvents specification](https://github.com/cloudevents/spec). */
export declare const getAuditLogControllerAuditLog: API.OperationMethod<GetAuditLogControllerAuditLogRequest, GetAuditLogResponseListDto, GetAuditLogControllerAuditLogError, VerdaOpContext>;
export type GetBalanceControllerBalanceError = VerdaOpError;
/** Get project balance */
export declare const getBalanceControllerBalance: API.OperationMethod<GetBalanceControllerBalanceRequest, BalanceResponseDto, GetBalanceControllerBalanceError, VerdaOpContext>;
export type GetClusterAvailabilityControllerAllAvailabilitiesError = VerdaOpError;
/** Get all cluster types availability */
export declare const getClusterAvailabilityControllerAllAvailabilities: API.OperationMethod<GetClusterAvailabilityControllerAllAvailabilitiesRequest, GetClusterAvailabilityControllerAllAvailabilitiesResponse, GetClusterAvailabilityControllerAllAvailabilitiesError, VerdaOpContext>;
export type GetClustersControllerClusterByIdError = VerdaOpError;
/** Get cluster by id */
export declare const getClustersControllerClusterById: API.OperationMethod<GetClustersControllerClusterByIdRequest, GetClusterResponsePublicApiDto, GetClustersControllerClusterByIdError, VerdaOpContext>;
export type GetClustersControllerInstancesError = VerdaOpError;
/** Get clusters Return all clusters of the project */
export declare const getClustersControllerInstances: API.OperationMethod<GetClustersControllerInstancesRequest, GetClustersControllerInstancesResponse, GetClustersControllerInstancesError, VerdaOpContext>;
export type GetClusterTypesControllerInstanceTypesError = VerdaOpError;
/** Get cluster types */
export declare const getClusterTypesControllerInstanceTypes: API.OperationMethod<GetClusterTypesControllerInstanceTypesRequest, GetClusterTypesControllerInstanceTypesResponse, GetClusterTypesControllerInstanceTypesError, VerdaOpContext>;
export type GetContainerDeploymentTemplatesPublicApiControllerTemplateError = VerdaOpError;
/** Get a container deployment template */
export declare const getContainerDeploymentTemplatesPublicApiControllerTemplate: API.OperationMethod<GetContainerDeploymentTemplatesPublicApiControllerTemplateRequest, ContainerDeploymentTemplateDetailPublicApiDto, GetContainerDeploymentTemplatesPublicApiControllerTemplateError, VerdaOpContext>;
export type GetContainerRegistryControllerContainerRegistryPricingError = VerdaOpError;
/** Get container registry price */
export declare const getContainerRegistryControllerContainerRegistryPricing: API.OperationMethod<GetContainerRegistryControllerContainerRegistryPricingRequest, ContainerRegistryPricingResponseDto, GetContainerRegistryControllerContainerRegistryPricingError, VerdaOpContext>;
export type GetContainerTypesControllerContainerTypesError = VerdaOpError;
/** Get container types */
export declare const getContainerTypesControllerContainerTypes: API.OperationMethod<GetContainerTypesControllerContainerTypesRequest, GetContainerTypesControllerContainerTypesResponse, GetContainerTypesControllerContainerTypesError, VerdaOpContext>;
export type GetDeploymentError = VerdaOpError;
/** Get deployment by name */
export declare const getDeployment: API.OperationMethod<GetDeploymentRequest, DeploymentPublicApiResponseDto, GetDeploymentError, VerdaOpContext>;
export type GetDeploymentLogsPublicApiControllerLogsError = NotFound | VerdaOpError;
/** Get deployment replica logs Fetch log lines from the replicas of a deployment. */
export declare const getDeploymentLogsPublicApiControllerLogs: API.OperationMethod<GetDeploymentLogsPublicApiControllerLogsRequest, GetDeploymentLogsPublicApiControllerLogsResponse, GetDeploymentLogsPublicApiControllerLogsError, VerdaOpContext>;
export type GetDeploymentScalingError = VerdaOpError;
/** Get deployment scaling options by deployment name */
export declare const getDeploymentScaling: API.OperationMethod<GetDeploymentScalingRequest, ScalingOptionsPublicApiDto, GetDeploymentScalingError, VerdaOpContext>;
export type GetDeploymentSystemLogsPublicApiControllerLogsError = BadRequest | Forbidden | NotFound | VerdaOpError;
/** Get deployment system logs Fetch deployment system logs. */
export declare const getDeploymentSystemLogsPublicApiControllerLogs: API.OperationMethod<GetDeploymentSystemLogsPublicApiControllerLogsRequest, GetDeploymentSystemLogsPublicApiControllerLogsResponse, GetDeploymentSystemLogsPublicApiControllerLogsError, VerdaOpContext>;
export type GetImagesControllerClusterImageTypesError = NotFound | VerdaOpError;
/** Get images types for cluster */
export declare const getImagesControllerClusterImageTypes: API.OperationMethod<GetImagesControllerClusterImageTypesRequest, GetImagesControllerClusterImageTypesResponse, GetImagesControllerClusterImageTypesError, VerdaOpContext>;
export type GetImagesControllerImageTypesError = NotFound | VerdaOpError;
/** Get images types for instances */
export declare const getImagesControllerImageTypes: API.OperationMethod<GetImagesControllerImageTypesRequest, GetImagesControllerImageTypesResponse, GetImagesControllerImageTypesError, VerdaOpContext>;
export type GetInstanceAvailabilityControllerAllAvailabilitiesError = VerdaOpError;
/** Get all instance type availabilities for all locations */
export declare const getInstanceAvailabilityControllerAllAvailabilities: API.OperationMethod<GetInstanceAvailabilityControllerAllAvailabilitiesRequest, GetInstanceAvailabilityControllerAllAvailabilitiesResponse, GetInstanceAvailabilityControllerAllAvailabilitiesError, VerdaOpContext>;
export type GetInstanceGroupsPublicControllerError = VerdaOpError;
/** Get an instance group */
export declare const getInstanceGroupsPublicController: API.OperationMethod<GetInstanceGroupsPublicControllerRequest, InstanceGroupResponseDto, GetInstanceGroupsPublicControllerError, VerdaOpContext>;
export type GetInstancesControllerInstanceByIdError = VerdaOpError;
/** Get instance by id */
export declare const getInstancesControllerInstanceById: API.OperationMethod<GetInstancesControllerInstanceByIdRequest, GetInstanceResponsePublicApiDto, GetInstancesControllerInstanceByIdError, VerdaOpContext>;
export type GetInstancesControllerInstancesError = VerdaOpError;
/** Get instances Return all instances of the project, optionally filtered by status and/or tags. Tag filters: `tag=key` matches instances carrying the key with any value, `tag=key=value` matches the value exactly (split at the first `=`). Repeat the parameter to require multiple tags at once. ### Rate limits This endpoint is rate limited to 120 requests per minute per project. */
export declare const getInstancesControllerInstances: API.OperationMethod<GetInstancesControllerInstancesRequest, GetInstancesControllerInstancesResponse, GetInstancesControllerInstancesError, VerdaOpContext>;
export type GetInstanceTypesControllerInstanceTypesError = VerdaOpError;
/** Get instance types */
export declare const getInstanceTypesControllerInstanceTypes: API.OperationMethod<GetInstanceTypesControllerInstanceTypesRequest, GetInstanceTypesControllerInstanceTypesResponse, GetInstanceTypesControllerInstanceTypesError, VerdaOpContext>;
export type GetJobLogsPublicApiControllerLogsError = NotFound | VerdaOpError;
/** Get job deployment replica logs Fetch log lines from the replicas of a job deployment. */
export declare const getJobLogsPublicApiControllerLogs: API.OperationMethod<GetJobLogsPublicApiControllerLogsRequest, GetJobLogsPublicApiControllerLogsResponse, GetJobLogsPublicApiControllerLogsError, VerdaOpContext>;
export type GetJobSystemLogsPublicApiControllerLogsError = BadRequest | Forbidden | NotFound | VerdaOpError;
/** Get job deployment system logs Fetch job deployment system logs. */
export declare const getJobSystemLogsPublicApiControllerLogs: API.OperationMethod<GetJobSystemLogsPublicApiControllerLogsRequest, GetJobSystemLogsPublicApiControllerLogsResponse, GetJobSystemLogsPublicApiControllerLogsError, VerdaOpContext>;
export type GetJournalControllerComputeJournalError = VerdaOpError;
/** Get activity journal for a compute Get all events for a compute (instance or cluster). Includes also associated volume or shared storage attach / detach events. */
export declare const getJournalControllerComputeJournal: API.OperationMethod<GetJournalControllerComputeJournalRequest, GetJournalControllerComputeJournalResponse, GetJournalControllerComputeJournalError, VerdaOpContext>;
export type GetJournalControllerJournalError = VerdaOpError;
/** Get activity journal for a compute or volume */
export declare const getJournalControllerJournal: API.OperationMethod<GetJournalControllerJournalRequest, GetJournalControllerJournalResponse, GetJournalControllerJournalError, VerdaOpContext>;
export type GetJournalControllerVolumeJournalError = VerdaOpError;
/** Get activity journal for a volume Get all events for a volume. Does not include compute-related events. */
export declare const getJournalControllerVolumeJournal: API.OperationMethod<GetJournalControllerVolumeJournalRequest, GetJournalControllerVolumeJournalResponse, GetJournalControllerVolumeJournalError, VerdaOpContext>;
export type GetLocationsControllerVolumeTypesError = VerdaOpError;
/** Returns a list of available locations */
export declare const getLocationsControllerVolumeTypes: API.OperationMethod<GetLocationsControllerVolumeTypesRequest, GetLocationsControllerVolumeTypesResponse, GetLocationsControllerVolumeTypesError, VerdaOpContext>;
export type GetLongTermControllerLongTermPeriodsClustersError = VerdaOpError;
/** Get long term periods for clusters */
export declare const getLongTermControllerLongTermPeriodsClusters: API.OperationMethod<GetLongTermControllerLongTermPeriodsClustersRequest, GetLongTermControllerLongTermPeriodsClustersResponse, GetLongTermControllerLongTermPeriodsClustersError, VerdaOpContext>;
export type GetLongTermControllerLongTermPeriodsInstancesError = VerdaOpError;
/** Get long term periods for instances */
export declare const getLongTermControllerLongTermPeriodsInstances: API.OperationMethod<GetLongTermControllerLongTermPeriodsInstancesRequest, GetLongTermControllerLongTermPeriodsInstancesResponse, GetLongTermControllerLongTermPeriodsInstancesError, VerdaOpContext>;
export type GetManagedEndpointsControllerPricingError = VerdaOpError;
/** Get managed inference endpoint prices */
export declare const getManagedEndpointsControllerPricing: API.OperationMethod<GetManagedEndpointsControllerPricingRequest, GetManagedEndpointsControllerPricingResponse, GetManagedEndpointsControllerPricingError, VerdaOpContext>;
export type GetPublicApiControllerDeploymentEnvironmentVariablesError = VerdaOpError;
/** Get deployment environment variables */
export declare const getPublicApiControllerDeploymentEnvironmentVariables: API.OperationMethod<GetPublicApiControllerDeploymentEnvironmentVariablesRequest, GetPublicApiControllerDeploymentEnvironmentVariablesResponse, GetPublicApiControllerDeploymentEnvironmentVariablesError, VerdaOpContext>;
export type GetPublicApiControllerDeploymentReplicasByNameError = VerdaOpError;
/** Get deployment replicas by deployment name */
export declare const getPublicApiControllerDeploymentReplicasByName: API.OperationMethod<GetPublicApiControllerDeploymentReplicasByNameRequest, ReplicasPublicApiDto, GetPublicApiControllerDeploymentReplicasByNameError, VerdaOpContext>;
export type GetPublicApiControllerFilesetSecretsError = VerdaOpError;
/** Get fileset secrets File secrets can be used as a secret mount storage */
export declare const getPublicApiControllerFilesetSecrets: API.OperationMethod<GetPublicApiControllerFilesetSecretsRequest, GetPublicApiControllerFilesetSecretsResponse, GetPublicApiControllerFilesetSecretsError, VerdaOpContext>;
export type GetPublicApiControllerRegistryCredentialsError = VerdaOpError;
/** Get all registry credentials */
export declare const getPublicApiControllerRegistryCredentials: API.OperationMethod<GetPublicApiControllerRegistryCredentialsRequest, GetPublicApiControllerRegistryCredentialsResponse, GetPublicApiControllerRegistryCredentialsError, VerdaOpContext>;
export type GetPublicApiControllerReplicasStatusByNameError = VerdaOpError;
/** Get deployment status */
export declare const getPublicApiControllerReplicasStatusByName: API.OperationMethod<GetPublicApiControllerReplicasStatusByNameRequest, GetDeploymentStatusResponseDto, GetPublicApiControllerReplicasStatusByNameError, VerdaOpContext>;
export type GetPublicApiControllerSecretsError = VerdaOpError;
/** Get secrets */
export declare const getPublicApiControllerSecrets: API.OperationMethod<GetPublicApiControllerSecretsRequest, GetPublicApiControllerSecretsResponse, GetPublicApiControllerSecretsError, VerdaOpContext>;
export type GetScaledJobPublicApiControllerByNameError = VerdaOpError;
/** Get job deployment by name */
export declare const getScaledJobPublicApiControllerByName: API.OperationMethod<GetScaledJobPublicApiControllerByNameRequest, ScaledJobResponseDto, GetScaledJobPublicApiControllerByNameError, VerdaOpContext>;
export type GetScaledJobPublicApiControllerScaledJobStatusByNameError = VerdaOpError;
/** Get job deployment status */
export declare const getScaledJobPublicApiControllerScaledJobStatusByName: API.OperationMethod<GetScaledJobPublicApiControllerScaledJobStatusByNameRequest, GetScaledJobStatusResponseDto, GetScaledJobPublicApiControllerScaledJobStatusByNameError, VerdaOpContext>;
export type GetScaledJobPublicApiControllerScalingOptionsByNameError = VerdaOpError;
/** Get job deployment scaling options */
export declare const getScaledJobPublicApiControllerScalingOptionsByName: API.OperationMethod<GetScaledJobPublicApiControllerScalingOptionsByNameRequest, ScalingOptionsResponseDto, GetScaledJobPublicApiControllerScalingOptionsByNameError, VerdaOpContext>;
export type GetScriptsControllerScriptError = VerdaOpError;
/** Get single startup script by ID */
export declare const getScriptsControllerScript: API.OperationMethod<GetScriptsControllerScriptRequest, GetScriptResponseDto, GetScriptsControllerScriptError, VerdaOpContext>;
export type GetScriptsControllerScriptsError = VerdaOpError;
/** Get startup scripts */
export declare const getScriptsControllerScripts: API.OperationMethod<GetScriptsControllerScriptsRequest, GetScriptsControllerScriptsResponse, GetScriptsControllerScriptsError, VerdaOpContext>;
export type GetSshkeysControllerKeyError = VerdaOpError;
/** Get single SSH key by ID */
export declare const getSshkeysControllerKey: API.OperationMethod<GetSshkeysControllerKeyRequest, GetKeysResponseDto, GetSshkeysControllerKeyError, VerdaOpContext>;
export type GetSshkeysControllerKeysError = VerdaOpError;
/** Get SSH keys */
export declare const getSshkeysControllerKeys: API.OperationMethod<GetSshkeysControllerKeysRequest, GetSshkeysControllerKeysResponse, GetSshkeysControllerKeysError, VerdaOpContext>;
export type GetVolumesControllerVolumeByIdError = VerdaOpError;
/** Get volume by id */
export declare const getVolumesControllerVolumeById: API.OperationMethod<GetVolumesControllerVolumeByIdRequest, GetVolumesControllerVolumeByIdResponse, GetVolumesControllerVolumeByIdError, VerdaOpContext>;
export type GetVolumesControllerVolumesError = VerdaOpError;
/** Get all volumes */
export declare const getVolumesControllerVolumes: API.OperationMethod<GetVolumesControllerVolumesRequest, GetVolumesControllerVolumesResponse, GetVolumesControllerVolumesError, VerdaOpContext>;
export type GetVolumesControllerVolumesInTrashError = VerdaOpError;
/** Get all volumes that are in trash */
export declare const getVolumesControllerVolumesInTrash: API.OperationMethod<GetVolumesControllerVolumesInTrashRequest, GetVolumesControllerVolumesInTrashResponse, GetVolumesControllerVolumesInTrashError, VerdaOpContext>;
export type GetVolumeTypesControllerVolumeTypesError = VerdaOpError;
/** Get volume types */
export declare const getVolumeTypesControllerVolumeTypes: API.OperationMethod<GetVolumeTypesControllerVolumeTypesRequest, GetVolumeTypesControllerVolumeTypesResponse, GetVolumeTypesControllerVolumeTypesError, VerdaOpContext>;
export type InstancesControllerPerformActionsError = BadRequest | NotFound | VerdaOpError;
/** Perform action on an instance or multiple instances Perform an action on a single or multiple instances. Note: to `hibernate` an instance, you must first `shutdown` it. All instance volumes would be detached and the instance will be deleted. **Important**: To remove an instance and stop charging your account, you must `delete` it. Using `shutdown` will keep charging your account. When deleting an instance, you can specify which of its' attached volumes will be deleted by providing `volume_ids` array. Any attached volumes that are not specified in the array would be detached. Note: If not providing a `volume_ids` array, only the OS volume will be deleted and the rest detached. */
export declare const instancesControllerPerformActions: API.OperationMethod<InstancesControllerPerformActionsRequest, InstancesControllerPerformActionsResponse, InstancesControllerPerformActionsError, VerdaOpContext>;
export type ListContainerDeploymentTemplatesPublicApiControllerTemplatesError = VerdaOpError;
/** List container deployment templates */
export declare const listContainerDeploymentTemplatesPublicApiControllerTemplates: API.OperationMethod<ListContainerDeploymentTemplatesPublicApiControllerTemplatesRequest, ListContainerDeploymentTemplatesPublicApiControllerTemplatesResponse, ListContainerDeploymentTemplatesPublicApiControllerTemplatesError, VerdaOpContext>;
export type ListDeploymentsError = VerdaOpError;
/** Get all deployments */
export declare const listDeployments: API.OperationMethod<ListDeploymentsRequest, ListDeploymentsResponse, ListDeploymentsError, VerdaOpContext>;
export type ListInstanceGroupsPublicControllerError = VerdaOpError;
/** List instance groups Returns this project’s live instance groups, oldest first. */
export declare const listInstanceGroupsPublicController: API.OperationMethod<ListInstanceGroupsPublicControllerRequest, ListInstanceGroupsPublicControllerResponse, ListInstanceGroupsPublicControllerError, VerdaOpContext>;
export type PausePublicApiControllerDeploymentByNameError = VerdaOpError;
/** Pause deployment */
export declare const pausePublicApiControllerDeploymentByName: API.OperationMethod<PausePublicApiControllerDeploymentByNameRequest, PausePublicApiControllerDeploymentByNameResponse, PausePublicApiControllerDeploymentByNameError, VerdaOpContext>;
export type PauseScaledJobPublicApiControllerScaledJobByNameError = VerdaOpError;
/** Pause job deployment */
export declare const pauseScaledJobPublicApiControllerScaledJobByName: API.OperationMethod<PauseScaledJobPublicApiControllerScaledJobByNameRequest, PauseScaledJobPublicApiControllerScaledJobByNameResponse, PauseScaledJobPublicApiControllerScaledJobByNameError, VerdaOpContext>;
export type PublicApiControllerGetComputeAndAvailabilityError = VerdaOpError;
/** Get compute resource types and availability */
export declare const publicApiControllerGetComputeAndAvailability: API.OperationMethod<PublicApiControllerGetComputeAndAvailabilityRequest, PublicApiControllerGetComputeAndAvailabilityResponse, PublicApiControllerGetComputeAndAvailabilityError, VerdaOpContext>;
export type PurgePublicApiControllerQueueError = VerdaOpError;
/** Purge deployment queue */
export declare const purgePublicApiControllerQueue: API.OperationMethod<PurgePublicApiControllerQueueRequest, PurgePublicApiControllerQueueResponse, PurgePublicApiControllerQueueError, VerdaOpContext>;
export type PurgeScaledJobPublicApiControllerQueueError = VerdaOpError;
/** Purge job deployment queue */
export declare const purgeScaledJobPublicApiControllerQueue: API.OperationMethod<PurgeScaledJobPublicApiControllerQueueRequest, PurgeScaledJobPublicApiControllerQueueResponse, PurgeScaledJobPublicApiControllerQueueError, VerdaOpContext>;
export type RemoveInstanceGroupsPublicControllerError = VerdaOpError;
/** Delete an instance group Removes the group from caller-facing reads while retaining its historical row and allowing its name to be reused. */
export declare const removeInstanceGroupsPublicController: API.OperationMethod<RemoveInstanceGroupsPublicControllerRequest, RemoveInstanceGroupsPublicControllerResponse, RemoveInstanceGroupsPublicControllerError, VerdaOpContext>;
export type RestartPublicApiControllerDeploymentByNameError = VerdaOpError;
/** Restart deployment */
export declare const restartPublicApiControllerDeploymentByName: API.OperationMethod<RestartPublicApiControllerDeploymentByNameRequest, RestartPublicApiControllerDeploymentByNameResponse, RestartPublicApiControllerDeploymentByNameError, VerdaOpContext>;
export type ResumePublicApiControllerDeploymentByNameError = VerdaOpError;
/** Resume deployment */
export declare const resumePublicApiControllerDeploymentByName: API.OperationMethod<ResumePublicApiControllerDeploymentByNameRequest, ResumePublicApiControllerDeploymentByNameResponse, ResumePublicApiControllerDeploymentByNameError, VerdaOpContext>;
export type ResumeScaledJobPublicApiControllerScaledJobByNameError = VerdaOpError;
/** Resume job deployment */
export declare const resumeScaledJobPublicApiControllerScaledJobByName: API.OperationMethod<ResumeScaledJobPublicApiControllerScaledJobByNameRequest, ResumeScaledJobPublicApiControllerScaledJobByNameResponse, ResumeScaledJobPublicApiControllerScaledJobByNameError, VerdaOpContext>;
export type ScaledJobPublicApiControllerGetListError = VerdaOpError;
/** Get all job deployments */
export declare const scaledJobPublicApiControllerGetList: API.OperationMethod<ScaledJobPublicApiControllerGetListRequest, ScaledJobPublicApiControllerGetListResponse, ScaledJobPublicApiControllerGetListError, VerdaOpContext>;
export type UpdateDeploymentError = VerdaOpError;
/** Update deployment */
export declare const updateDeployment: API.OperationMethod<UpdateDeploymentRequest, DeploymentPublicApiResponseDto, UpdateDeploymentError, VerdaOpContext>;
export type UpdateDeploymentScalingError = VerdaOpError;
/** Update deployment scaling options */
export declare const updateDeploymentScaling: API.OperationMethod<UpdateDeploymentScalingRequest, ScalingOptionsPublicApiDto, UpdateDeploymentScalingError, VerdaOpContext>;
export type UpdateInstanceGroupsPublicControllerError = BadRequest | Conflict | VerdaOpError;
/** Update an instance group Name, description, and template SSH keys or startup script can change. Location, instance type, image and OS volume are immutable. */
export declare const updateInstanceGroupsPublicController: API.OperationMethod<UpdateInstanceGroupsPublicControllerRequest, InstanceGroupResponseDto, UpdateInstanceGroupsPublicControllerError, VerdaOpContext>;
export type UpdatePublicApiControllerEnvironmentVariablesOfContainerError = VerdaOpError;
/** Update environment variables of a container. The env vars must exist in order to update them */
export declare const updatePublicApiControllerEnvironmentVariablesOfContainer: API.OperationMethod<UpdatePublicApiControllerEnvironmentVariablesOfContainerRequest, UpdatePublicApiControllerEnvironmentVariablesOfContainerResponse, UpdatePublicApiControllerEnvironmentVariablesOfContainerError, VerdaOpContext>;
export type UpdateScaledJobPublicApiControllerScaledJobByNameError = VerdaOpError;
/** Update job deployment */
export declare const updateScaledJobPublicApiControllerScaledJobByName: API.OperationMethod<UpdateScaledJobPublicApiControllerScaledJobByNameRequest, ScaledJobResponseDto, UpdateScaledJobPublicApiControllerScaledJobByNameError, VerdaOpContext>;
export type VolumesControllerPerformActionsError = VerdaOpError;
/** Perform action on a volume or multiple volumes */
export declare const volumesControllerPerformActions: API.OperationMethod<VolumesControllerPerformActionsRequest, VolumesControllerPerformActionsResponse, VolumesControllerPerformActionsError, VerdaOpContext>;
