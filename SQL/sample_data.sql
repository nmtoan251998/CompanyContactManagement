CREATE DATABASE CompanyContactManagement;
USE CompanyContactManagement;

--Companies
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Companies](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Companies] ADD  CONSTRAINT [PK_Companies] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO

--Departments
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Departments](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[CompanyId] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Departments] ADD  CONSTRAINT [PK_Departments] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_Departments_CompanyId] ON [dbo].[Departments]
(
	[CompanyId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Departments] ADD  DEFAULT ((0)) FOR [CompanyId]
GO
ALTER TABLE [dbo].[Departments]  WITH CHECK ADD  CONSTRAINT [FK_Departments_Companies_CompanyId] FOREIGN KEY([CompanyId])
REFERENCES [dbo].[Companies] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Departments] CHECK CONSTRAINT [FK_Departments_Companies_CompanyId]
GO

--Users
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](max) NOT NULL,
	[Email] [nvarchar](max) NOT NULL,
	[Pwd] [nvarchar](max) NOT NULL,
	[Role] [int] NOT NULL,
	[Phone] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[DepartmentId] [int] NOT NULL,
	[Age] [int] NOT NULL
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
CREATE NONCLUSTERED INDEX [IX_Users_DepartmentId] ON [dbo].[Users]
(
	[DepartmentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, DROP_EXISTING = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [DepartmentId]
GO
ALTER TABLE [dbo].[Users] ADD  DEFAULT ((0)) FOR [Age]
GO
ALTER TABLE [dbo].[Users]  WITH CHECK ADD CONSTRAINT [FK_Users_Departments_DepartmentId] FOREIGN KEY([DepartmentId])
REFERENCES [dbo].[Departments] ([Id])
ON DELETE CASCADE
GO
ALTER TABLE [dbo].[Users] CHECK CONSTRAINT [FK_Users_Departments_DepartmentId]
GO

SET IDENTITY_INSERT Companies ON;

INSERT INTO Companies(Id, Name) VALUES (1, 'APPLE Inc.');
INSERT INTO Companies(Id, Name) VALUES (2, 'Microsoft Corporation');
INSERT INTO Companies(Id, Name) VALUES (3, 'Google LLC');
INSERT INTO Companies(Id, Name) VALUES (4, 'Amazon.com, Inc.');
INSERT INTO Companies(Id, Name) VALUES (5, 'Alibaba.com, Inc.');

SET IDENTITY_INSERT Companies OFF;
SELECT * FROM Companies;

SET IDENTITY_INSERT Departments ON;

INSERT INTO Departments(Id, Name, CompanyID) VALUES (1, 'Engineering', 1);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (2, 'Marketing', 1);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (3, 'Sales', 1);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (4, 'Financial',1);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (5, 'Managing Director', 1);

INSERT INTO Departments(Id, Name, CompanyID) VALUES (6, 'Developer', 2);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (7, 'Marketing', 2);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (8, 'Sales', 2);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (9, 'Financial',2);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (10, 'Managing Director', 2);

INSERT INTO Departments(Id, Name, CompanyID) VALUES (11, 'Developer', 3);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (12, 'Advertising', 3);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (13, 'Sales', 3);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (14, 'Financial',3);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (15, 'Managing Director', 3);

INSERT INTO Departments(Id, Name, CompanyID) VALUES (16, 'Engineering', 4);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (17, 'Marketing', 4);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (18, 'Sales', 4);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (19, 'Financial',4);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (20, 'Managing Director', 4);

INSERT INTO Departments(Id, Name, CompanyID) VALUES (21, 'Developer', 5);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (22, 'Marketing', 5);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (23, 'Sales', 5);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (24, 'Financial', 5);
INSERT INTO Departments(Id, Name, CompanyID) VALUES (25, 'Managing Director', 5);

SET IDENTITY_INSERT Departments OFF;
SELECT * FROM Departments WHERE CompanyId = 1;

SET IDENTITY_INSERT Users ON;

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(1, 'Benjamin B Wilkes', 'BenjaminBWilkes@gmail.com', '123456', 0, '406-557-3789', 'Texas', 1, 45);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(2, 'Carolyn R Crandall', 'CarolynRCrandall@gmail.com', '123456', 1, '304-618-8267', 'West Virginia', 1, 25);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(3, 'Alisa K Thomas', 'AlisaKThomas@gmail.com', '123456', 1, '516-547-4577', 'New York', 1, 38);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(4, 'Michael C Phillips', 'MichaelCPhillips@gmail.com', '123456', 0, '208-672-0925', 'Idaho', 2, 38);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(5, 'Scott M Cantu', 'ScottMCantu@gmail.com', '123456', 1, '971-563-7062', 'Oregon', 2, 30);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(6, 'Alice R Howard', 'AliceRHoward@gmail.com', '123456', 1, '731-688-7698', 'Tennessee', 2, 28);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(7, 'Cecilia R Kimzey', 'CeciliaRKimzey@gmail.com', '123456', 0, '517-518-0218', 'Michigan', 3, 55);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(8, 'Colleen J West', 'ColleenJWest@gmail.com', '123456', 1, '214-679-0002', 'Texas', 3, 32);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(9, 'John T Steele', 'JohnTSteele@gmail.com', '123456', 1, '541-716-7947', 'Oregon', 3, 50);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(10, 'Gregorio H Pierce', 'GregorioHPierce@gmail.com', '123456', 0, '802-587-4835', 'Vermont', 4, 51);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(11, 'Ronald J King', 'RonaldJKing@gmail.com', '123456', 1, '678-727-0033', 'Georgia', 4, 28);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(12, 'Rhonda H Gilmer', 'RhondaHGilmer@gmail.com', '123456', 1, '860-866-3371', 'Connecticut', 4, 46);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(13, 'Cynthia J Marshall', 'CynthiaJMarshall@gmail.com', '123456', 0, '318-640-9453', 'Louisiana', 5, 42);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(14, 'MichelleAMoore', 'MichelleAMoore@gmail.com', '123456', 1, '914-261-0256', 'New York', 5, 28);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(15, 'Marissa R Damato', 'MarissaRDamato@gmail.com', '123456', 1, '626-531-2808', 'California', 5, 35);

SELECT * FROM Users JOIN Departments ON Users.DepartmentId = Departments.Id JOIN Companies ON Companies.Id = Departments.CompanyId WHERE CompanyId = 1;

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(16, 'Betty J Thomson', 'BettyJThomson@gmail.com', '123456', 0, '903-931-3720', 'Maine', 6, 48);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(17, 'Robert E Davis', 'RobertEDavis@gmail.com', '123456', 1, '518-593-7472', 'Indiana', 6, 46);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(18, 'Ethel A Ong', 'EthelAOng@gmail.com', '123456', 1, '641-459-4168', 'Iowa', 6, 40);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(19, 'John D Johnson', 'JohnDJohnson@gmail.com', '123456', 0, '574-647-4709', 'Indiana', 7, 55);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(20, 'Jesse M Myers', 'JesseMMyers@gmail.com', '123456', 1, '304-655-7502', 'Ohio', 7, 35);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(21, 'John V Outlaw', 'JohnVOutlaw@gmail.com', '123456', 1, '646-888-6398', 'New York', 7, 64);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(22, 'Ricky C Wall', 'RickyCWall@gmail.com', '123456', 0, '216-961-7210', 'Ohio', 8, 54);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(23, 'Dianne E Hunter', 'DianneEHunter@gmail.com', '123456', 1, '870-587-8332', 'Arkansas', 8, 48);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(24, 'Debra J Russell', 'DebraJRussell@gmail.com', '123456', 1, '706-234-4787', 'Georgia', 8, 33);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(25, 'Allan M Fulton', 'AllanMFulton@gmail.com', '123456', 0, '916-806-8668', 'Georgia', 9, 64);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(26, 'Carol B Goodwin', 'CarolBGoodwin@gmail.com', '123456', 1, '832-824-9341', 'Texas', 9, 39);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(27, 'Fidel J Thomas', 'FidelJThomas@gmail.com', '123456', 1, '251-450-5647', 'Alabama', 9, 41);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(28, 'Traci E Arce', 'TraciEArce@gmail.com', '123456', 0, '201-604-6096', 'New Jersey', 10, 37);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(29, 'Erin R Watson', 'ErinRWatson@gmail.com', '123456', 1, '830-460-4320', 'Texas', 10, 22);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(30, 'William A Coburn', 'WilliamACoburn@gmail.com', '123456', 1, '864-634-9956', 'South Carolina', 10, 26);

SELECT * FROM Users JOIN Departments ON Users.DepartmentId = Departments.Id JOIN Companies ON Companies.Id = Departments.CompanyId WHERE CompanyId = 2;

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(31, 'Theola J Cavanaugh', 'TheolaJCavanaugh@gmail.com', '123456', 0, '619-804-6270', 'Pennsylvania', 11, 28);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(32, 'Arthur S White', 'ArthurSWhite@gmail.com', '123456', 1, '610-954-6448', 'Pennsylvania', 11, 25);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(33, 'Kyle L Bolden', 'KyleLBolden@gmail.com', '123456', 1, '989-653-1675', 'Michigan', 11, 25);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(34, 'Robert C Clark', 'RobertCClark@gmail.com', '123456', 0, '951-659-9894', 'Ohio', 12, 46);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(35, 'Allison S Williamson', 'AllisonSWilliamson@gmail.com', '123456', 1, '401-338-1734', 'Tennessee', 12, 34);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(36, 'Jared J Kennedy', 'JaredJKennedy@gmail.com', '123456', 1, '218-734-9516', 'Minnesota', 12, 43);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(37, 'Patrick M Moore', 'PatrickMMoore@gmail.com', '123456', 0, '303-433-5699', 'Colorado', 13, 34);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(38, 'Virgilio L Grimsley', 'VirgilioLGrimsley@gmail.com', '123456', 1, '252-986-8979', 'North Carolina', 13, 28);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(39, 'Joseph J Mower', 'JosephJMower@gmail.com', '123456', 1, '618-204-1803', 'Illinois', 13, 47);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(40, 'Tiffani G Mellon', 'TiffaniGMellon@gmail.com', '123456', 0, '856-401-7743', 'New Jersey', 14, 76);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(41, 'Reed L Bray', 'ReedLBray@gmail.com', '123456', 1, '786-218-0172', 'Florida', 14, 55);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(42, 'Lashanda A Oliver', 'LashandaAOliver@gmail.com', '123456', 1, '702-438-6238', 'Nevada', 14, 36);

INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(43, 'Stacy R Jones', 'StacyRJones@gmail.com', '123456', 0, '605-362-9785', 'South Dakota', 15, 57);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(44, 'Genie E Riebe', 'GenieERiebe@gmail.com', '123456', 1, '410-968-5370', 'Maryland', 15, 41);
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(45, 'Emilia D Perez', 'EmiliaDPerez@gmail.com', '123456', 1, '715-493-0210', 'Wisconsin', 15, 34);

SELECT * FROM Users JOIN Departments ON Users.DepartmentId = Departments.Id JOIN Companies ON Companies.Id = Departments.CompanyId WHERE CompanyId = 3;

/*
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(, '', '@gmail.com', '123456', 0, '', '', 15, );
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(, '', '@gmail.com', '123456', 1, '', '', 15, );
INSERT INTO Users(Id, Name, Email, Pwd, Role, Phone, Address, DepartmentId, Age) VALUES(, '', '@gmail.com', '123456', 1, '', '', 15, );
*/

SET IDENTITY_INSERT Users OFF;
SELECT * FROM Users;