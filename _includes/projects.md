## Projects

<div class="projects-section">
  <div class="project-item">
    <h4 style="margin:0 10px 5px; position: relative;">
      <i class="fas fa-code-branch" style="margin-right: 5px; color: #043361;"></i>An Event Web Application on AWS
    </h4>
    <p style="margin-left: 25px; margin-bottom: 15px;">
      Developed and deployed web services on AWS EC2 with RESTful API and Servlet in Java to handle HTTP requests and responses.
      <span class="project-date">(July 2021)</span>
    </p>
  </div>

  <div class="project-item">
    <h4 style="margin:10px 10px 5px; position: relative;">
      <i class="fas fa-code-branch" style="margin-right: 5px; color: #043361;"></i>An End-to-End Recommender System on AliCloud
    </h4>
    <p style="margin-left: 25px; margin-bottom: 15px;">
      Developed a streaming data pipeline to respond to recommendation requests in real-time based on Scala and Spark, including using Flume for collecting logs, Kafka Streaming for data clearing and data preprocessing, and Spark streaming for stream processing.
      <span class="project-date">(January - February 2021)</span>
    </p>
  </div>
</div>

<style>
@media (prefers-color-scheme: dark) {
  .projects-section i {
    color: rgb(62, 183, 240) !important;
  }
}

.projects-section .project-item {
  transition: transform 0.2s ease;
  padding: 5px;
  border-radius: 5px;
}

.projects-section .project-item:hover {
  transform: translateX(3px);
  background-color: rgba(0, 0, 0, 0.02);
}

.project-date {
  font-style: italic;
  font-size: 0.9em;
  color: #666;
}

@media (prefers-color-scheme: dark) {
  .project-date {
    color: #aaa;
  }
}
</style>
