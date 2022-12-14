import { User, Project, Issue } from 'entities';
import { ProjectCategory } from 'constants/projects';
import { IssueType, IssueStatus, IssuePriority } from 'constants/issues';

import { createEntity } from 'utils/typeorm';

const seedUsers = (): Promise<User[]> => {
  const users = [
    createEntity(User, {
      name: 'John',
      email: 'john@jira.guest',
      avatarUrl: 'https://i.ibb.co/7JM1P2r/picke-rick.jpg',
    }),
    createEntity(User, {
      name: 'Tom',
      email: 'tom@jira.guest',
      avatarUrl: 'https://i.ibb.co/6n0hLML/baby-yoda.jpg',
    }),
    createEntity(User, {
      name: 'Jerry',
      email: 'jerry@jira.guest',
      avatarUrl: 'https://i.ibb.co/6RJ5hq6/gaben.jpg',
    }),
  ];
  return Promise.all(users);
};

const seedProject = (users: User[]): Promise<Project> =>
  createEntity(Project, {
    name: 'singularity 1.0',
    url: 'https://www.atlassian.com/software/jira',
    description:
      'Plan, track, and manage your agile and software development projects in Jira. Customize your workflow, collaborate, and release great software.',
    category: ProjectCategory.SOFTWARE,
    users,
  });

const seedIssues = (project: Project): Promise<Issue[]> => {
  const { users } = project;

  const issues = [
    createEntity(Issue, {
      title: 'This is an issue of type: Task.',
      description: `<p>Your teams can collaborate in Jira applications by breaking down pieces of work into issues. Issues can represent tasks, software bugs, feature requests or any other type of project work.</p><p><br></p><h3>Jira Software&nbsp;(software projects) issue types:</h3><p><br></p><h1><strong>Bug </strong><span style="background-color: initial;">🐞</span></h1><p>A bug is a problem which impairs or prevents the functions of a product.</p><p><br></p><h1><strong>Story </strong><span style="color: rgb(51, 51, 51);">📗</span></h1><p>A user story is the smallest unit of work that needs to be done.</p><p><br></p><h1><strong>Task </strong><span style="color: rgb(51, 51, 51);">🗳</span></h1><p>A task represents work that needs to be done.</p>`,
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.HIGH,
      position: 1,
      timeSpent: 4,
      estimate: 8,
      reporterId: users[1].id,
      project,
      users: [users[0]],
    }),
    createEntity(Issue, {
      title: "Click on an issue to see what's behind it.",
      description: `<h2>Key terms to know</h2><p><br></p><h3>Issues</h3><p>A Jira 'issue' refers to a single work item of any type or size that is tracked from creation to completion. For example, an issue could be a feature being developed by a software team, a to-do item for a marketing team, or a contract that needs to be written by a legal team.</p><p><br></p><h3>Projects</h3><p>A project is, quite simply, a collection of issues that are held in common by purpose or context. Issues grouped into projects can be configured in a variety of ways, ranging from visibility restrictions to available workflows.</p><p><br></p><h3>Workflows</h3><p>Workflows represent the&nbsp;sequential&nbsp;path an issues takes from creation to completion. A basic workflow might look something like this:</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:6203a73b-f2a1-4d91-9587-bc4b7d822d6b/workflow_timeline_desktop-temporary.svg?cdnVersion=736" alt="Jira workflow diagram"></p><p><br></p><p>In this case, Open, Done, and the labels in between represent the status an issue can take, while the arrows represent potential transitions from one status to another.</p><p><br></p><h3>Agile</h3><p>Agile is not a Jira Software-specific term. It's a work philosophy that originated in the software development field and has since expanded to a variety of other industries. While we won't belabor the definition here (there are&nbsp;great resources for that!), agile emphasizes an iterative approach to work informed by customer feedback where delivery occurs incrementally and continuously. The ideal agile team can move quickly and adapt to changing requirements without missing much of a beat.</p><p><br></p><h3>Server</h3><p>With&nbsp;Jira Software Server,&nbsp;you host Jira Software on your own hardware and customize your setup however you'd like. This is generally the best option for teams who need to manage all the details,&nbsp;have stricter requirements for data governance,&nbsp;and don't mind the additional complexity of hosting themselves.</p><p><br></p><p><img src="https://wac-cdn.atlassian.com/dam/jcr:4a1b934f-38b4-456e-b807-29e93935e00f/Server%20Cluster@2x.png?cdnVersion=736" alt="Data Center"></p><p><br></p><h3>Data Center</h3><p><br></p><h3>With&nbsp;Jira Software Data Center, you can host Jira Software on your own hardware or with IaaS vendors like&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/aws" rel="noopener noreferrer" target="_blank">AWS</a>&nbsp;and&nbsp;<a href="https://www.atlassian.com/enterprise/data-center/azure" rel="noopener noreferrer" target="_blank">Azure</a>. This is generally the best option for enterprise teams who need uninterrupted access to Jira Software and performance at scale.</h3><p><br></p>`,
      type: IssueType.TASK,
      status: IssueStatus.BACKLOG,
      priority: IssuePriority.LOW,
      position: 2,
      timeSpent: 2,
      estimate: 5,
      reporterId: users[2].id,
      project,
      users: [users[0]],
    }),
  ];

  return Promise.all(issues);
};

const createGuestAccount = async (): Promise<User> => {
  const users = await seedUsers(); // insert users into db - postgres
  const project = await seedProject(users);
  await seedIssues(project);

  return users[1];
};

export default createGuestAccount;
