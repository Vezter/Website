## Understand the problem and business goals
- Clarify what the system must achieve
- Identify users, stakeholders, and success metrics
- Define scope and constraints
## Gather functional requirements
Define features and behaviors the system must support
Capture use cases and user journeys
Document inputs, outputs, and workflows
## Gather non-functional requirements
Scalability
Performance
Reliability and availability
Security
Maintainability
Compliance and cost constraints
## Estimate scale and capacity
Expected users and traffic
Requests per second (RPS)
Data storage size
Growth projections
## Define high-level architecture
Choose architectural style (monolith, microservices, event-driven, etc.)
Identify major components/services
Define interactions between components
## Design APIs and contracts
Define service interfaces
Specify request/response formats
Establish communication protocols (REST, gRPC, messaging, etc.)
## Design the data model
Identify entities and relationships
Choose databases (SQL, NoSQL, cache, search index)
Plan schemas, indexing, and partitioning
## Design data flow and workflows
Map how data moves through the system
Define synchronous vs asynchronous processing
Plan queues, events, and pipelines
## Address scalability
Load balancing
Horizontal scaling
Caching strategies
Database replication/sharding
CDN usage
## Address reliability and fault tolerance
Redundancy
Failover mechanisms
Retries and circuit breakers
Backup and disaster recovery
## Design security
Authentication and authorization
Encryption
Secure communication
Threat modeling and risk mitigation
## Plan observability and monitoring
Logging
Metrics
Tracing
Alerting and dashboards
## Evaluate trade-offs
Cost vs performance
Simplicity vs flexibility
Consistency vs availability
Build vs buy decisions
## Create detailed component designs
Internal service logic
Algorithms
Class/module design
State management
## Review and validate the design
Conduct architecture/design reviews
Validate against requirements
Identify bottlenecks and risks
## Plan deployment and infrastructure
Cloud/on-prem decisions
CI/CD pipelines
Containerization and orchestration
Infrastructure as code
## Implement the system
Develop components and services
Integrate modules
Follow coding standards and testing practices
## Test the system
Unit testing
Integration testing
Performance/load testing
Security testing
User acceptance testing
## Deploy and release
Staging and production rollout
Canary or blue-green deployments
Rollback planning
## Monitor and maintain
Monitor health and performance
Fix bugs and incidents
Optimize performance and costs
Continuously improve the system
## Iterate and evolve
Gather feedback
Add new features
Refactor architecture as scale and requirements change